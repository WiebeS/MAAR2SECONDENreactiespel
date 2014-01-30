window.onload = function(){

//  canvas	
window.canvas = document.getElementById("gameCanvas");

window.canvas.style.display = 'none';

window.startScreen = document.getElementById('startScreen');
window.canvasContext = canvas.getContext("2d");

// canvas afmetingen
window.canvasWidth = 700;
window.canvasHeight = 393;

// canvas plaatje
window.bg_canvasImage = new Image();
window.bg_canvasImage.src = "img/achterGrond.png";

// Car plaatje
window.autoImage	 = document.createElement('img');
window.autoImage.src = "img/auto.png";

// Telefoon plaatje
window.telefoon = new Image();
window.telefoon.src = "img/telefoon1.png"

// Coordinaten X en Y van de plaatjes
window.autoX = 150;
window.autoY = 100;

window.telefoonX = 300;
window.telefoonY = 0;

// Boolean welke vertelt of er een telefoon in beeld is
window.telefoonBoolean = new Boolean;
window.telefoonBoolean = false;

window.achtergrondX = 0;
window.achtergrondY = 0;

window.seconden = 1;

	}



// als er op play gedrukt wordt start de game en het drawen
function startGame() {
	// set startscherm op display none;
	startScreen.style.display = 'none';
	canvas.style.display = 'inline';
	// interval welke de refresh rate van het scherm bepaalt
	setInterval( gameFunctions, 10);
	// interval welke per seconde verspringt en dus mee gerekend kan worden.
	setInterval( secondenTeller, 1000);


	//autoImage.onclick = function(e) {
    //alert('klik');}


}

// alle game functies
function gameFunctions() {

	carKoers();
	reDraw();
}


// alle teken functies
function reDraw() {

// refresh het canvas
canvasContext.clearRect(0,0,canvasWidth,canvasHeight);
// teken achtergrond
 drawBackground(); 

	// teken auto
	drawCar();		
	if(telefoonBoolean == true)
	{
		drawTelefoon();	
	//console.log(telefoonBoolean);
}

}


// tekent achtergrond
function drawBackground() {
	//teken achtergrond
	if(achtergrondX > -1400) {

		achtergrondX -= 1;
	}
	else {
		achtergrondX = 0;
	}
	// de teken syntax
	canvasContext.drawImage(bg_canvasImage, achtergrondX, achtergrondY);

}

// functie welke de auto tekent
function drawCar(){


	/* autoImage.style.top =  500;
    autoImage.style.left = 230;*/
	//canvas.body.appendChild(autoImage);


  // document.body.appendChild(autoImage);

	//canvasContext.drawImage(autoImage, autoX, autoY);
}

// functie welke de telefoon tekent 
function drawTelefoon(){

	if(telefoonBoolean == true)
	{
		canvasContext.drawImage(telefoon, telefoonX,telefoonY);
	}
	
}


// functie welke de koers van de auto bepaalt, tot dat de auto crasht. 
// Dit is wanneer hij van de weg raakt
function carKoers()
{
	if(telefoonBoolean == true)
{

	//console.log(telefoonBoolean);
	
	if(autoY <= 240 )
	{
		autoY += 0.3;
	}
	else{
		//alert('Je bent gecrashtttttttttttttt');
		autoY = 100;
	}
}
}

// Functie welke het aantal seconden bijhoudt en de Booleans wisselt aan de hand van seconden
function secondenTeller()
{
	seconden ++;
	
	// elke 3 seconden wordt de telefoon boolean omgeswitched
	if (seconden % 2 == 0)
	{
		telefoonBoolean = !telefoonBoolean;
		console.log(seconden + "TEEEEEEEEST"+ telefoonBoolean);
		//telefoonX = Math.floor((Math.random()*300)+1);
		telefoonX = 400;
	}
}

