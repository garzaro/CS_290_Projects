function deepEqual(x, y) {

	if(x===y)
		return true; 

	if((typeof x == "object" && x !=null) && (typeof y == "object" && y !=null)) {
		for(var property in x){
			if(!(property in y)) {
				return false;
			}

			if(!deepEqual(x[property], y[property])) {
				return false; 
			}
		}
			
	}
	else {
		return false; 
	}
	
	return true; 
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));	//->true
console.log(deepEqual(obj, {here: 1, object: 2}));	//->false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));	//->true
console.log(deepEqual(null, null)); 

