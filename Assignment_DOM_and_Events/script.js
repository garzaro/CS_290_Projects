


function newTable(rowNum, columnNum) {
  var table = document.createElement("table");
  table.setAttribute("border", "1");
 
  for (var i = 0; i < rowNum; i++) {
    var row = document.createElement("tr");
 
    for (var j = 0; j < columnNum; j++) {
      if(i == 0){
        var t = "Header " + (j + 1);
        app("th", t); 

      }
      else{
      	var t = i + "," + (j + 1); 
        app("td", t); 
    	}
    
    	function app(elementT, textCont){
    		var cell = document.createElement(elementT);
      	var cellText = document.createTextNode(textCont);
      	cell.appendChild(cellText);
     		row.appendChild(cell);
    	}
    } 
    table.appendChild(row); 
    
  }
  document.getElementsByTagName("body")[0].appendChild(table);
}

function makeMyButtons(){
	for(var i = 0; i < 5; i++){
  	var button = document.createElement("button"); 
    var direction = getDirection(); 
    function getDirection(){
    	if(i == 0) return "up";
      else if(i == 1) return "down";
      else if(i == 2) return "left";
      else if(i == 3) return "right";
      else return "mark cell"; 
    }
    var buttonText = document.createTextNode(direction); 
    button.appendChild(buttonText); 
    document.body.appendChild(button); 
  }
}

function up(){
	if(index>3){
  	selectCell.style.borderWidth = "1px";
    index = index - 4; 
    selectCell = document.getElementsByTagName("td")[index]; 
    selectCell.style.borderWidth = "5px";
  }
}

function down(){
	if(index<8){
  	selectCell.style.borderWidth = "1px";
    index = index + 4; 
    selectCell = document.getElementsByTagName("td")[index];
    selectCell.style.borderWidth = "5px";
  }
}

function right(){
	if(selectCell.cellIndex!=3){
  	selectCell.style.borderWidth = "1px";
    index = index + 1; 
    selectCell = document.getElementsByTagName("td")[index];
    selectCell.style.borderWidth = "5px";
  }
}

function left(){
	if(selectCell.cellIndex!=0){
  	selectCell.style.borderWidth = "1px";
    index = index - 1; 
    selectCell = document.getElementsByTagName("td")[index];
    selectCell.style.borderWidth = "5px";
  }
}

function mark(){
	selectCell.style.backgroundColor = '#b3e6ff';
}

var table1 = newTable(4, 4); 
var index = 0; 
var selectCell = document.getElementsByTagName("td")[index];
selectCell.style.borderWidth = "5px";
var buttons = makeMyButtons(); 

document.getElementsByTagName("button")[0].addEventListener("click",  up); 
document.getElementsByTagName("button")[1].addEventListener("click",  down); 
document.getElementsByTagName("button")[2].addEventListener("click",  left); 
document.getElementsByTagName("button")[3].addEventListener("click",  right); 
document.getElementsByTagName("button")[4].addEventListener("click",  mark);
