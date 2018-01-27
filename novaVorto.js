  //fill respondaro with the number of underscores matching the word length
  function novaLudo(game)
  {
  document.getElementById("venkas").innerHTML=("");
  for (var i = 0; i < game.hazardaVorto.length; i++) {
  game.respondaro[i] = "_";
  }
  //put them in a string
  game.cheno = game.respondaro.join(" ");
  document.getElementById("respondo").innerHTML = game.cheno;
  document.getElementById("enhavo").innerHTML = "enhavo: " + vortListo.length + " vortoj";
  document.getElementById("provado").innerHTML = game.dekalkulo;
};
