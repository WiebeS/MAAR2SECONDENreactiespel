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

// teller welke de array verteld, welke image die moet laden
window.imgCounter = 0;
// array met alle plaatjes van de telefoons erin
window.imgArray = new Array();

window.imgArray[0] = new Image();
window.imgArray[0].src = "img/telefoons/telefoon1.png";

window.imgArray[1] = new Image();
window.imgArray[1].src = "img/telefoons/telefoon2.png";

window.imgArray[2] = new Image();
window.imgArray[2].src = "img/telefoons/telefoon3.png";

window.imgArray[3] = new Image();
window.imgArray[3].src = "img/telefoons/telefoon0.png";

window.imgArray[4] = new Image();
window.imgArray[4].src = "img/telefoons/telefoon4.png";

window.imgArray[5] = new Image();
window.imgArray[5].src = "img/telefoons/telefoon5.png";

window.imgArray[6] = new Image();
window.imgArray[6].src = "img/telefoons/telefoon6.png";

window.imgArray[7] = new Image();
window.imgArray[7].src = "img/telefoons/telefoon7.png";

window.imgArray[8] = new Image();
window.imgArray[8].src = "img/telefoons/telefoon8.png";

window.imgArray[9] = new Image();
window.imgArray[9].src = "img/telefoons/telefoon9.png";

window.imgArray[10] = new Image();
window.imgArray[10].src = "img/telefoons/telefoon10.png";

window.imgArray[11] = new Image();
window.imgArray[11].src = "img/telefoons/telefoon0.png";

window.imgArray[12] = new Image();
window.imgArray[12].src = "img/telefoons/telefoon11.png";

window.imgArray[13] = new Image();
window.imgArray[13].src = "img/telefoons/telefoon12.png";

window.imgArray[14] = new Image();
window.imgArray[14].src = "img/telefoons/telefoon13.png";

window.imgArray[15] = new Image();
window.imgArray[15].src = "img/telefoons/telefoon0.png";

window.imgArray[16] = new Image();
window.imgArray[16].src = "img/telefoons/telefoon14.png";

window.imgArray[17] = new Image();
window.imgArray[17].src = "img/telefoons/telefoon15.png";

window.imgArray[18] = new Image();
window.imgArray[18].src = "img/telefoons/telefoon16.png";

window.imgArray[19] = new Image();
window.imgArray[19].src = "img/telefoons/telefoon17.png";

window.imgArray[20] = new Image();
window.imgArray[20].src = "img/telefoons/telefoon18.png";

window.imgArray[21] = new Image();
window.imgArray[21].src = "img/telefoons/telefoon0.png";

window.imgArray[22] = new Image();
window.imgArray[22].src = "img/telefoons/telefoon19.png";

window.imgArray[23] = new Image();
window.imgArray[23].src = "img/telefoons/telefoon0.png";

window.imgArray[24] = new Image();
window.imgArray[24].src = "img/telefoons/telefoon20.png";

window.imgArray[25] = new Image();
window.imgArray[25].src = "img/telefoons/telefoon0.png";

window.imgArray[26] = new Image();
window.imgArray[26].src = "img/telefoons/telefoon21.png";

// array met alle reactiewoorden erin
window.reactieWoordenArray = new Array();

window.reactieWoordenArray[0] 	= 'Ja jij wel';
window.reactieWoordenArray[1] 	= 'Onderweg :(';
window.reactieWoordenArray[2] 	= 'Zonde';
window.reactieWoordenArray[3] 	= 'Ga weg!';
window.reactieWoordenArray[4] 	= 'Balen!';
window.reactieWoordenArray[5] 	= 'JAJA!';
window.reactieWoordenArray[6] 	= 'Gedraag je';
window.reactieWoordenArray[7] 	= 'Verdiend';
window.reactieWoordenArray[8] 	= 'Doe ik!';
window.reactieWoordenArray[9] 	= 'Etterbak';
window.reactieWoordenArray[10] 	= 'Ik wil ook!';
window.reactieWoordenArray[11] 	= 'Hou OP!';
window.reactieWoordenArray[12] 	= 'Hou maar op';
window.reactieWoordenArray[13] 	= 'JAMMER!';
window.reactieWoordenArray[14] 	= 'HUPHUPHUP';
window.reactieWoordenArray[15] 	= 'NEE NEE!';
window.reactieWoordenArray[16] 	= 'Goed idee';
window.reactieWoordenArray[17] 	= 'Waarom??';
window.reactieWoordenArray[18] 	= 'HOLLAND HUP';
window.reactieWoordenArray[19] 	= 'LEKKER!';
window.reactieWoordenArray[20] 	= '2-0 is beter';
window.reactieWoordenArray[21] 	= 'KAPPEN!!';
window.reactieWoordenArray[22] 	= 'Bij ons!';
window.reactieWoordenArray[23] 	= 'OPLICHTERS';
window.reactieWoordenArray[24] 	= 'SOWIESO';
window.reactieWoordenArray[25] 	= 'GENOEG!';
window.reactieWoordenArray[26] 	= 'JAJAJA!';

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

//window.telefoonX = 400;
window.telefoonX = 800;
window.telefoonY = 0;

// auto boolean welke verteld of de muis de auto heeft verlaten, wordt gebruikt om 1 malig de koers te veranderen
window.autoVerlaten = 0;

// auto boolean welke verteld of de muis zich op het autotje bevind
window.opAuto = new Boolean;
window.opAuto = false;

// Boolean welke vertelt of er een telefoon actief is
window.telefoonBoolean = new Boolean;
window.telefoonBoolean = false;

// int welke telt hoeveel berichtjes er zijn geweest
window.telefoonOverleefd = 0;
// Boolean welke verteld of de telefoon zichtbaar is, zodat de image verandert kan worden
window.telefoonInBeeldBoolean = new Boolean;
window.telefoonInBeeldBoolean = false;

// Boolean welke verteld of er raakgeklikt is
window.raakGeklikt = new Boolean;
window.raakGeklikt = false;

// Boolean welke vertelt of de game gepauzeerd is
window.pauzeBoolean = new Boolean;
window.pauzeBoolean = false;

// Boolean welke vertelt of de game gecrasht is
window.autoCrash = new Boolean;
window.autoCrash = false;

window.achtergrondX = 0;
window.achtergrondY = 0;
window.achtergrondX2 = 1401;
window.achtergrondY2 = 0;
window.achtergrondNummer =1;

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
window.notificatieGeluid	 	= new Audio("audio/notificatie.mp3");  
window.sendGeluid 				= new Audio("audio/send.mp3");  
window.crashGeluid 				= new Audio("audio/carCrash.mp3");  

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
	// functie welke aftelt voor de start 
	aftellenStart();
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
	// reactiewoord	
	drawReactieWoord();
	}	
	break;

	case 'eind':
	{
		drawEindscherm();
	}

	break;

	}
}

function aftellenStart(){
 

     if (seconden < 4)
     {
     	//tekenen van text op het canvas
     	canvasContext.font = "bold 80px Arial";
     	canvasContext.fillStyle = 'white';
     	canvasContext.strokeStyle = 'black';
     	canvasContext.lineWidth = 5;

    	canvasContext.fillText( 4	- seconden,350,180);
    	canvasContext.strokeText( 4	- seconden,350,180);

    	canvasContext.fill();
    	canvasContext.stroke();

     }

      if (seconden == 4)
     {
     	//tekenen van text op het canvas
     	canvasContext.font = "bold 70px Arial";
     	canvasContext.strokeStyle = 'black';
     	canvasContext.lineWidth = 5;


    	canvasContext.fillText( 'START',260,180);
    	canvasContext.strokeText( 'START',260,180);

    	canvasContext.fill();
    	canvasContext.stroke();

     }
     
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
	 	canvasContext.drawImage(smoke, smokeframeX * 128 ,smokeframeY *128 ,128,128,autoX -55, autoY - 40 ,100,100);
}

// functie welke de explosie animatie tekent, en een sprite doorloopt
function drawExplosie(){

  	if (autoCrash){

  		crashGeluid.play();
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
			if (aantalExplosies == 2)
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
		
			koerswijziging = Math.floor((Math.random()*10)- 5) / 4 ;
			}
		
			}
}

// functie welke een woord van de auto verplaatst naar het reactievak, wat een reactie is op een bericht
function drawReactieWoord(){

	if (telefoonBoolean == true && opAuto == false )
	{		
			// opmaak van het reactiewoord
		  canvasContext.font = 	"bold 30px Helvetica ";
		  canvasContext.fillStyle = 'white';
		  canvasContext.strokeStyle = 'black';
		  // het tekenen van het reactiewoord met een border eromheen, het woord komt uit de reactie array
          canvasContext.fillText	(reactieWoordenArray[imgCounter]   ,muisX - 100 , muisY);
          canvasContext.strokeText	(reactieWoordenArray[imgCounter]   ,muisX - 100, muisY);
	}
}

// functie welke de telefoon verwerking in het spel afhandelt, oftewel het "reageren" op de berichten
function telefoonGeklikt(){
	// if welke checkt of de telefoon in beeld is
	
	if (telefoonBoolean)
	{	// if welke checkt of er op de reageerknop van de telefoon is geklikt
		if (muisKlikX > 515 && muisKlikX < 675 && muisKlikY > 285 && muisKlikY < 340)
		{
			//zet het aantal overleefde telefoon berichtjes in de plus en plus zodat het volgende plaatje geladen wordt
			telefoonOverleefd++;
			// speeld send geluid
			sendGeluid.play();

			telefoonBoolean = false;
			muisKlikX = 0;
			muisKlikY = 0;
			// if welke de counter plust, zodat er een nieuwe afbeelding en reactie wordt geladen

		    raakGeklikt = true;
		}
	}
}

// tekent achtergrond
function drawBackground() {
	//teken achtergrond
		if(gameStatus == 'spel'){

			achtergrondX 	-= 4;
			achtergrondX2 	-= 4;

							
			canvasContext.drawImage(bg_canvasImage, achtergrondX, achtergrondY);	

			canvasContext.drawImage(bg_canvasImage, achtergrondX2, achtergrondY);
			
			
			if (achtergrondX < -1400 )
			{
				achtergrondX = 0;
				
			}

			if (achtergrondX2 < -2801 )
			{
				achtergrondX2 = 1401;
			}
		}
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
		telefoonInBeeldBoolean = true;
		if (telefoonX > 400){
			telefoonX -=15;
		}
		
		canvasContext.drawImage(imgArray[imgCounter], telefoonX,telefoonY);
	}
 	
 	if (telefoonBoolean == false){
 		
		if (telefoonX < 800){
			telefoonX +=5;
		}

	if (telefoonX > 780){
		telefoonInBeeldBoolean = false
	}	
		if (telefoonX > 780&& raakGeklikt == true)
		{
		imgCounter++;
		raakGeklikt= false;
		}	

		canvasContext.drawImage(imgArray[imgCounter], telefoonX,telefoonY);
 		}

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
			koerswijziging = Math.floor((Math.random()*10)- 5) / 4 ;			
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
	
	if (seconden > 4){


	// elke 3 seconden wordt de telefoon boolean omgeswitched
	if (seconden % 3 == 0)
	{
		telefoonBoolean = !telefoonBoolean;

		if (telefoonBoolean){
			notificatieGeluid.play();
		}
	}
}
}

function scoreDisplay() {

						if (seconden > 4){

						//tekenen van text op het canvas
						canvasContext.globalAlpha=0.5;   // Full opacity
						
						canvasContext.beginPath();
   						canvasContext.rect(15, 10, 250, 80);
    					canvasContext.fillStyle = 'white';
     					canvasContext.fill();
     					canvasContext.globalAlpha=1;   // Full opacity
     					canvasContext.lineWidth = 5;
    				  	canvasContext.strokeStyle = 'black';
     					canvasContext.stroke();

                        canvasContext.fillStyle = 'black';
                        canvasContext.font = 	"bold 20px Helvetica ";
                        
                        canvasContext.strokeStyle = 'black';
     					canvasContext.lineWidth = 1.5;

                        canvasContext.fillText("Gereden meters:  " 	+ ((seconden - 4)* 10) ,20,30);
                        canvasContext.fillText("Aantal berichten:  " 	+telefoonOverleefd,20,50);

                        canvasContext.font = 	"bold 18px Helvetica ";
                        canvasContext.fillText("Druk ESC voor pauze" ,20,80);

                       //  canvasContext.strokeText("Gereden meters:  " 	+ ((seconden - 4)* 10) ,20,30);
                      //  canvasContext.strokeText("Aantal berichten:  " 	+telefoonOverleefd,20,50);

                        
                        }
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
                    	
        					canvasContext.fillStyle = 'white';
     						canvasContext.strokeStyle = 'black';
     						canvasContext.lineWidth = 5;

     						canvasContext.font 		= "bold 90px Arial";
        					canvasContext.fillText		("PAUZE",200,180); 
    						canvasContext.strokeText	("PAUZE",200,180);



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