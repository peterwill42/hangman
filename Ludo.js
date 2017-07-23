function newgame(){
	var ludo={
		//choose a random word from the vortListo array
		hazardaVorto: vortListo[Math.floor(Math.random() * vortListo.length)],
		//global variable
		cheno :"",
		//empty array to store guesses
		respondaro : [],
		  
		//takso
	  
		poentoj : 0,
		vicoj : 0,
		vera : 0,
		ĝusta : 0,
		korekta : 0,
		//show countdown starting point for the new game
		dekalkulo : selx
	}

	Array.prototype.slice.call(document.getElementsByClassName('key')).map(function (element){
		element.onclick=function(){ litero(element.getAttribute('data-letter'),ludo) }
	})
	document.getElementById('selekto').onchange=niveloj
	document.getElementById('mku').onclick=function(){malkaŝu(ludo)}
	document.getElementById('nv').onclick=newgame
	novaLudo(ludo)
	return ludo
}
newgame()

 
