//choose a random word from the above array
  var randomWord = vortListo[Math.floor(Math.random() * vortListo.length)];
//global variables
  var cheno;
  var count = 0;
  //empty array to store guesses
  var answerArray = [];


  //fill the answer array with the number of underscores matching the word length
  function novaLudo()
  {
      for (var i = 0; i < randomWord.length; i++) {
  answerArray[i] = "_";
  }
  //put them in a string
  cheno = answerArray.join(" ");
  document.getElementById("respondo").innerHTML = cheno;
  document.getElementById("montru2").innerHTML = "enhavas " + vortListo.length + " vortoj";
}
