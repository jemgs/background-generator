var css = document.querySelector("h3");
var color1  = document.querySelector(".color1");
var color2  = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("mybutton");


function SetGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+  ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(){

	randomValue1 = [ 
		Math.floor(Math.random() * 255), 
		Math.floor(Math.random() * 255), 
		Math.floor(Math.random() * 255) 
	]; 
    randomValue2 = [ 
    	Math.floor(Math.random() * 255), 
    	Math.floor(Math.random() * 255), 
    	Math.floor(Math.random() * 255) 
    ];


    body.style.background = "linear-gradient(to right, "
    +`rgb(${randomValue1[0]}, ${randomValue1[1]}, ${randomValue1[2]}),`
    +` rgb(${randomValue2[0]}, ${randomValue2[1]}, ${randomValue2[2]}))`;

    css.textContent = body.style.background + ";";  
}

SetGradient();

color1.addEventListener("input", SetGradient);

color2.addEventListener("input", SetGradient);

button.addEventListener("click", randomColor);
