      document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('zipSubmit').addEventListener('click', function(event){
	var zip = document.getElementById('zipCode').value; 
	var req = new XMLHttpRequest();
	req.open('Get', 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=fa7d80c48643dfadde2cced1b1be6ca1', true);
	req.addEventListener('load', function(){
	    if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		document.getElementById('cityName').textContent = response.name;
		document.getElementById('temp').textContent = response.main.temp + 'K';
		document.getElementById('hum').textContent = response.main.humidity + '%';
	    }
	    else{
		console.log("error in network request:" + req.statusText);
	    }
	})
	req.send(null);
	event.preventDefault();
    });

    document.getElementById('citySubmit').addEventListener('click', function(event){
	var city = document.getElementById('city').value;
	city =city.toLowerCase();
	var state = document.getElementById('state').value;
	state = state.toLowerCase();
	var full = city +',' + state;
	var req = new XMLHttpRequest();
	req.open('Get', 'http://api.openweathermap.org/data/2.5/weather?q=' + full  + '&appid=fa7d80c48643dfadde2cced1b1be6ca1', true)

	req.addEventListener('load', function(){
	    if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		if(response.name.toLowerCase()!=city){
		    alert('City Not Found');
		}
		else{
		    document.getElementById('cityName').textContent = response.name;
		    document.getElementById('temp').textContent = response.main.temp + 'K';
		    document.getElementById('hum').textContent = response.main.humidity + '%';
		}
	    }
	    else{
		console.log("error in network request:" + req.statusText);
	    }
	})
	req.send(null);
	event.preventDefault();
    });

    document.getElementById('somethingSubmit').addEventListener('click', function(event){
	var req = new XMLHttpRequest();
	var payload = { 'something': null};
	payload.something = document.getElementById('something').value;
	req.open('POST', 'http://httpbin.org/post', true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.addEventListener('load', function(){
	    if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		document.getElementById('somethingSent').textContent = response.json.something;
		document.getElementById('somethingRet').textContent = JSON.parse(response.data).something;
	    }
	    else
	    {
		console.log("Error in network request: " + req.statusText);
	    }
	})
	req.send(JSON.stringify(payload));
	event.preventDefault();
    });
}

	
