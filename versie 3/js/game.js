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
//window.autoImage	 = document.createElement('img');
window.autoImage	 = new Image();
window.autoImage.src = "img/auto.png";

window.opAuto = new Boolean;
window.opAuto = false;

// Telefoon plaatje
window.telefoon = new Image();
window.telefoon.src = "img/telefoon1.png"
// Afbeelding van de explosie sprite
window.explosie = new Image();
window.explosie.src = "img/explosie.png"


// Coordinaten X en Y van de plaatjes
window.autoX = 25;
window.autoY = 100;

window.telefoonX = 300;
window.telefoonY = 0;

// Boolean welke vertelt of er een telefoon in beeld is
window.telefoonBoolean = new Boolean;
window.telefoonBoolean = false;

// Boolean welke vertelt of de game gepauzeerd is
window.pauzeBoolean = new Boolean;
window.pauzeBoolean = false;

// Boolean welke vertelt of de game gecrasht is
window.autoCrash = new Boolean;
window.autoCrash = false;

window.achtergrondX = 0;
window.achtergrondY = 0;

window.seconden = 1;
window.gameStatus = 'start';

intervalGame = window.setInterval( gameFunctions, 1000/30);

intervalTeller = window.setInterval( secondenTeller, 1000);

}
// X Y coordinaten voor de explosie animatie Sprite
var explosieframeX  = 0;
var explosieframeY = 0;
;

// mogelijkheid om spel te pauzeren dmv de ESC toets
document.onkeydown = function(e){ 
          if (e == null) { // ie 
          	keycode = event.keyCode; 
          } else { // mozilla 
          	keycode = e.which; 
          } 
          if(keycode == 27){ // escape, close box, esc 
              //what you nedd
              pauzeBoolean = !pauzeBoolean;
              pauzeGame();
          } 
      };


// functie welke de explosie animatie tekent, en een sprite doorloopt
function drawExplosie(){

  	if (autoCrash){


		explosieframeX++; 
		if (explosieframeX >= 5)
		{
			explosieframeX = 0;
			explosieframeY++;
		}

		if (explosieframeY >= 5)
		{
			explosieframeY = 0;

		}
		//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		canvasContext.drawImage(explosie, explosieframeX * 64 ,explosieframeY *64 ,64,64,autoX, autoY - 70,200,200);

	}
	
}

// als er op play gedrukt wordt start de game en het drawen
function startGame() {
	// set startscherm op display none;
	startScreen.style.display = 'none';
	canvas.style.display = 'inline';
	// interval welke de refresh rate van het scherm bepaalt
	//setInterval( gameFunctions, 1000/60);
	// interval welke per seconde verspringt en dus mee gerekend kan worden.
	//setInterval( secondenTeller, 1000);

	// interval welke de refresh rate van het scherm bepaalt

	canvas.addEventListener('mousemove', ev_mousemove, false);

	//autoImage.onclick = function(e) {
    //alert('klik');}
}

// Mouse event functie welke de muis in de gaten houdt, en bepaalt of de auto van koers moet veranderen
function ev_mousemove (ev) {
	var x, y;

if (gameStatus == 0){
	// MUIS KLIK OP HET START SCHERM MOET ZORGEN VOOR HET GAAN NAAR SPEEL SCHERM

}



if (gameStatus == 1){
   // Get the mouse position relative to the canvas element.
  	if (ev.layerX || ev.layerX == 0) { // Firefox
  		x = ev.layerX;
  		y = ev.layerY;
 	} 

 	else if (ev.offsetX || ev.offsetX == 0) { // Opera
  		x = ev.offsetX;
  		y = ev.offsetY;
	}

	// checken of de muis zich op de auto bevind, de X en Y worden getraceerd en vergeleken met de afmetingen van de auto
	if (x >= autoX && x <= autoX+168 && y >= autoY && y <= autoY+92){
		opAuto =true;
	}
	else {
		opAuto = false;
	}
	}
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

switch (gameStatus)
{
	case 'start':
	drawStartScherm();
	break;

	case 'spel':
	// teken achtergrond
	drawBackground(); 
	// teken scoreboard
	scoreDisplay();
	// teken auto
	drawCar();	
	//teken exlosie animatie	
	drawExplosie();
	// teken telefoon
	drawTelefoon();	

	break;

	case 'einde':

	break;

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

  canvasContext.drawImage(autoImage, autoX, autoY);
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
	if(opAuto == false)
	{

		//console.log(telefoonBoolean);
	
		if(autoY <= 260 )
		{
		autoY += 0.6;
		autoX -= 0.1;
		}
		else
		{
		autoCrash = true;
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

function scoreDisplay() {
                        //tekenen van text op het canvas
                        canvasContext.font = "bold 14px Arial";
                        canvasContext.fillText("Gereden kilometers:  " +seconden ,20,30);
}

function drawStartScherm(){
		canvasContext.font = "bold 14px Arial";
                        	canvasContext.fillText("STARTSCHERM " +seconden ,20,30);
}

function pauzeGame(){
    if (pauzeBoolean == true)	
    {
                    		clearInterval(intervalGame);
                    		clearInterval(intervalTeller);

                    		canvasContext.font = "bold 14px Arial";
                        	canvasContext.fillText("Gereden kilometers:  " +seconden ,20,30);
                    		
    }

    else if (pauzeBoolean == false)                    	
    {
                    		intervalGame = window.setInterval( gameFunctions, 1000/60);	
                    		intervalTeller = window.setInterval( secondenTeller, 1000);
   }
}

function gameOver(){
	clearInterval(intervalGame);
    clearInterval(intervalTeller);
}
