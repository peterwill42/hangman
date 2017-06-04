//choose a random word from the vortListo array
  var hazardaVorto = vortListo[Math.floor(Math.random() * vortListo.length)];
//global variable
  var cheno = "";
  //empty array to store guesses
  var respondaro = [];

  //fill respondaro with the number of underscores matching the word length
  function novaLudo()
  {
  for (var i = 0; i < hazardaVorto.length; i++) {
  respondaro[i] = "_";
  }
  //put them in a string
  cheno = respondaro.join(" ");
  document.getElementById("respondo").innerHTML = cheno;
  document.getElementById("enhavo").innerHTML = "enhavo: " + vortListo.length + " vortoj";
  document.getElementById("provado").innerHTML = dekalkulo;
};
