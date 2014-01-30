window.onload = function(){

//  canvas	en zijn ID tag
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
window.autoImage	 = new Image();
window.autoImage.src = "img/carsprite.png";
// koers van de auto afwijking
window.koerswijziging = 1;
// string welke verteld of de auto naar links of rechts afwijkt. 'recht'/'links'/'rechts'
window.koers = 'recht';

// Telefoon plaatje
window.telefoon = new Image();
window.telefoon.src = "img/telefoon1.png"
// Afbeelding van de explosie sprite
window.explosie = new Image();
window.explosie.src = "img/explosie.png"
// Afbeelding van de Smoke sprite
window.smoke = new Image();
window.smoke.src = "img/smoke.png"

// X en Y Coordinaten van de Muis
window.muisX = 0;
window.muisY = 0;
// X en Y coordinaten van het klikken van de muis
window.muisKlikX = 0;
window.muisKlikY = 0;

// Coordinaten X en Y van de plaatjes
window.autoX = 25;
window.autoY = 155;

window.telefoonX = 400;
window.telefoonY = 0;

// auto boolean welke verteld of de muis de auto heeft verlaten, wordt gebruikt om 1 malig de koers te veranderen
window.autoVerlaten = 0;

// auto boolean welke verteld of de muis zich op het autotje bevind
window.opAuto = new Boolean;
window.opAuto = false;

// Boolean welke vertelt of er een telefoon in beeld is
window.telefoonBoolean = new Boolean;
window.telefoonBoolean = false;
window.telefoonOverleefd = 0;

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

window.onkeydown = keyboardListener;

window.intervalGame;
window.intervalTeller;

// X Y coordinaten voor de explosie animatie Sprite
window.explosieframeX = 0;
window.explosieframeY = 0;
window.aantalExplosies = 0;

// X Y coordinaten voor de Smoke animatie Sprite
window.smokeframeX = 0;
window.smokeframeY = 0;


// Het maken van een geluid
window.notificatieGeluid = new Audio("audio/notificatie.mp3");  
}


// functie welke de explosie animatie tekent, en een sprite doorloopt
function drawSmoke(){

  	
  		smokeframeX++; 
		if (smokeframeX == 6)
		{
			smokeframeX = 0;
			smokeframeY++;
		}

		if (smokeframeY == 6)
		{
			smokeframeY = 0;

		}
		//context.drawImage		(img,sx,sy,swidth,sheight,x,y,width,height);
	 	canvasContext.drawImage(smoke, smokeframeX * 128 ,smokeframeY *128 ,128,128,autoX -55, autoY - 40 ,100,100);
			

		//console.log('smoke');
}

// alle game functies
function gameFunctions() {
	
	muisOpAuto();
	carKoers();
	telefoonGeklikt();
	reDraw();
}

// alle teken functies
function reDraw() {

	// refresh het canvas
	canvasContext.clearRect(0,0,canvasWidth,canvasHeight);

	switch (gameStatus)
	{
	case 'start':
	{
		drawStartScherm();
	}
	
	break;

	case 'spel':
	{
		// teken achtergrond
	drawBackground(); 
	// teken scoreboard
	scoreDisplay();
	// teken auto
	drawCar();	
	//teken smoke auto animatie
	drawSmoke();
	//teken exlosie animatie	
	drawExplosie();
	// teken telefoon
	drawTelefoon();	
	}	
	break;

	case 'eind':
	{
		drawEindscherm();
	}

	break;

	}
}

// functie welke de explosie animatie tekent, en een sprite doorloopt
function drawExplosie(){

  	if (autoCrash){

  		explosieframeX++; 
		if (explosieframeX == 6)
		{
			explosieframeX = 0;
			explosieframeY++;
		}

		if (explosieframeY == 6)
		{
			explosieframeY = 0;

		}
		//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		canvasContext.drawImage(explosie, explosieframeX * 64 ,explosieframeY *64 ,64,64,autoX, autoY - 70,200,200);

		if (explosieframeX == 5 && explosieframeY == 5 )
		{
			aantalExplosies++;
			if (aantalExplosies == 1)
			{
			//alert('explosie');
			gameStatus = 'eind';
			}
		
		}
	}
}

// als er op play gedrukt wordt start de game en het drawen
function startGame() {
	// set startscherm op display none;
	startScreen.style.display = 'none';
	canvas.style.display = 'inline';

	canvas.addEventListener('mousemove', ev_mousemove, false);
	canvas.addEventListener("mousedown", getClickPosition, false);

	drawStartScherm();
}

function restartGame(){
	
	intervalGame 	= window.setInterval( gameFunctions, 1000/60);	
    intervalTeller 	= window.setInterval( secondenTeller, 1000);
}

function muisOpAuto(){
		// checken of de muis zich op de auto bevind, de X en Y worden getraceerd en vergeleken met de afmetingen van de auto
		if (muisX >= autoX && muisX <= autoX+168 && muisY >= autoY && muisY <= autoY+92){
			opAuto =true;
		//autoVerlaten = false;
			autoVerlaten = 0;
			}
		else  {
			opAuto = false;
			autoVerlaten++;
		// if welke checkt of auto verlaten is met de muis, en welke erna 1 keer een koers berekent voor de auto
		if (autoVerlaten <= 1){
			autoVerlaten = true;
			//console.log('auto verlaten');
			koerswijziging = Math.floor((Math.random()*10)- 5) / 4 ;
			}
		
			}
}

// functie welke de telefoon verwerking in het spel afhandelt, oftewel het "reageren" op de berichten
function telefoonGeklikt(){
	// if welke checkt of de telefoon in beeld is
	if (telefoonBoolean)
	{	// if welke checkt of er op de reageerknop van de telefoon is geklikt
		if (muisKlikX > 515 && muisKlikX < 675 && muisKlikY > 285 && muisKlikY < 340)
		{
			//console.log('muisKlikY'+muisKlikY );
			telefoonOverleefd++;
			telefoonBoolean = false;
			muisKlikX = 0;
			muisKlikY = 0;
		}
	}
}

// tekent achtergrond
function drawBackground() {
	//teken achtergrond
		if(autoCrash == false){
			if(achtergrondX > -1400) {

				achtergrondX -= 2;
			}
			else {
				achtergrondX = 0;
			}
			// de teken syntax
		}
	canvasContext.drawImage(bg_canvasImage, achtergrondX, achtergrondY);	
}

// functie welke de auto tekent
function drawCar(){


		// switch waarin wordt gekeken of de auto afbeelding naar links of rechts of recht getekend moet worden
		switch (koers){

		case 'recht':{
			// Afbeelding van de auto die recht rijd
			//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
			canvasContext.drawImage(autoImage, 148 ,157,117,63,autoX, autoY,168,92);
		}

		break;

		case 'links':{
			// Als de koers naar links is tekent er een andere plaatje van een auto die naar links stuurt
			//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		    canvasContext.drawImage(autoImage, 277 ,151,130,71,autoX, autoY,168,93);

		}
		break;

		case 'rechts':{
			// afbeelding van de auto die naar rechts stuurt
			//context.drawImage			(img,sx,sy,swidth,sheight,x,y,width,height);
			canvasContext.drawImage(autoImage, 7 ,148,130,77,autoX, autoY,168,93);
		}
		break;

			//  canvasContext.drawImage(autoImage, autoX, autoY);
		}
}

// functie welke de telefoon tekent 
function drawTelefoon(){

	// If welke checkt of de telefoon getekend mag worden
	if(telefoonBoolean == true)
	{
		canvasContext.drawImage(telefoon, telefoonX,telefoonY);
	}
	// if welke checkt of de telefoon in beeld is, en of er op de reageer knop is geklikt
}

// functie welke de koers van de auto bepaalt, tot dat de auto crasht. 
// Dit is wanneer hij van de weg raakt

function carKoers(){
	// random nummer tussen -5 en + 5 welke voor de koerswijziging van de auto zorgt
	// Na 3 seconden gaat de koerswijzigingen pas werken, zodat de speler even de tijd heeft om de muis te plaatsen
	// De If checkt of de muis zich buiten de auto bevind
	if(opAuto == false && seconden > 3 || telefoonBoolean == true)
	{
		// als de koerswijziging 0 wordt, wordt hij opnieuw berekend
		if (koerswijziging == 0)
		{
			koerswijziging = Math.floor((Math.random()*10)- 5) / 4 ;			//console.log('koers00');
		}
	
		// If welke checkt of de auto zich op de rijbaan bevind
		if(autoY <= 260 && autoY >= 60 )
		{
		
			if (koerswijziging < 0 ){
				koers = 'links';
			}

			if (koerswijziging > 0 ){
				koers = 'rechts';
			}
		autoY += koerswijziging;
		autoX += 0.5;
		}
		// If welke checkt of de auto zich BUITEN de rijbaan bevind

		else if (autoY > 260 || autoY < 60)
		{
		autoCrash = true;
		}
   }
   // if welke de koers recht zet als de muis zich weer op de auto bevind
   // en welke de auto herstelt naar het midden van de baan
   	if (opAuto && telefoonBoolean == false){
   		koers = 'recht';

   		if (autoY < 150)
   		{
   			autoY+= 0.2;
   		}
   		
   		if (autoY > 160)
   		{
   			autoY-= 0.2;
   		}

   		if (autoX > 25){
   			autoX-= 0.4;
   		}

   	 }
}

// Functie welke het aantal seconden bijhoudt en de Booleans wisselt aan de hand van seconden
function secondenTeller(){
	seconden ++;
	
	// elke 3 seconden wordt de telefoon boolean omgeswitched
	if (seconden % 3 == 0)
	{
		//telefoonBoolean = true;
		telefoonBoolean = !telefoonBoolean;
		//console.log(seconden + "TEEEEEEEEST"+ telefoonBoolean);
		//telefoonX = Math.floor((Math.random()*300)+1);
		//telefoonX = 400;
		if (telefoonBoolean){
			notificatieGeluid.play();
		}
	}
}

function scoreDisplay() {
                        //tekenen van text op het canvas
                        canvasContext.font = "bold 14px Arial";
                        canvasContext.fillText("Gereden kilometers:  " 	+seconden,20,30);
                        canvasContext.fillText("Aantal berichten:  " 	+telefoonOverleefd,20,50);
}

function drawStartScherm(){
		canvasContext.font = "bold 14px Arial";
        canvasContext.fillText("STARTSCHERM",300,30);
        canvasContext.fillText("Instructies: ",40,60);
      	canvasContext.fillText("Houd de muis op de auto om hem veilig op de weg te houden."	,40,80);
      	canvasContext.fillText("Klik op de telefoon om een bericht te verwerken."			,40,100);
      	canvasContext.fillText("Druk ESC om te pauzeren"									,40,200);
      	canvasContext.fillText("Druk ENTER om het spel te starten"							,40,300);
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

function drawEindscherm(){
	clearInterval(intervalGame);
    clearInterval(intervalTeller);

    canvasContext.font = "bold 14px Arial";
    canvasContext.fillText("GAME OVER, U HEEFT  " +seconden +"KILOMETERS AFGELEGD  ",20,30);
}

// Functie welk de keyboard inputs verwerkt en functies uitvoert.
function keyboardListener(e) {

	 if (e == null) { // ie 
          	keycode = event.keyCode; 
          } else { // mozilla 
          	keycode = e.which; 
          } 

        	  // enter verwerking om van het start scherm naar het spel scherm te gaan
			if(keycode == 13 && gameStatus == 'start'){ // escape, close box, esc 
              //what you nedd
              gameStatus = 'spel';
              restartGame();
          	} 

            // if welke de ESC toets afhandelt om te pauzeren, enkel wanneer het spel bezig is
          	if(keycode == 27 && gameStatus == 'spel'){ // escape, close box, esc 
              //what you nedd
              pauzeBoolean = !pauzeBoolean;
              pauzeGame();
              //alert('pauze');
          	} 
}

// Mouse event functie welke de muis in de gaten houdt, en bepaalt of de auto van koers moet veranderen
function ev_mousemove (ev) {
	//var x, y;
	if (gameStatus == 'spel'){
   // Get the mouse position relative to the canvas element.
  	if (ev.layerX || ev.layerX == 0) { // Firefox
  		muisX = ev.layerX;
  		muisY = ev.layerY;
 	} 

 	else if (ev.offsetX || ev.offsetX == 0) { // Opera
  		muisX = ev.offsetX;
  		muisY = ev.offsetY;
	}
			
	}
}

// functie welke de muispositie na een KLIK opvangt en de variabelen set
function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    muisKlikX = e.clientX - parentPosition.x;
    muisKlikY = e.clientY - parentPosition.y;

    //console.log('muisklikkers'+ muisKlikX + 'Y   '+muisKlikY);
}
 
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
      
    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}