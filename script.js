var selectedColour = 0;
var paint = false;

var colours = ["red", "yellow", "green", "black", "gray"];

function createPallet(){
	for (var i = 0; i < colours.length; i++){
		var colour = document.createElement("div");
		colour.classList.add("colour");
		var pallet = document.getElementById('pallet');
		colour.style.backgroundColor = colours[i];
		colour.id = colours[i];
		pallet.appendChild(colour);
		colour.addEventListener("click", pickCol);
	}	
}

function pickCol(e){
	selectedColour = e.target.id;

	console.log(selectedColour);
}

function mouseDown(){
	paint=true;
	console.log("hey");
	return;
}

function paintFunc(e){
	if(paint){
	console.log('in paint');
	var newDiv = document.createElement("div");
	newDiv.classList.add("newDiv"); 
	newDiv.style.backgroundColor = selectedColour;
	canvas.appendChild(newDiv);
	console.log(e.pageX);
	console.log(e.pageY);
	newDiv.style.top = e.pageY + "px";
	newDiv.style.left = e.pageX + "px";
}
}

function mouseUp (){
paint = false
}

function changeCanvas(){
	var canvas = document.getElementById("canvas");
	canvas.addEventListener("mousedown", mouseDown);
	canvas.addEventListener("mousemove", paintFunc);
	canvas.addEventListener("mouseup", mouseUp);
}

createPallet();
changeCanvas();
