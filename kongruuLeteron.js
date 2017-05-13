function Letter()
{
  //here is the letter typed by the user
  var letter =document.getElementById("montru").innerHTML

    for (var i = 0; i < randomWord.length; i++)
    {
      //if matching letter entered by user
      if (randomWord[i] === letter)
      {
        //assign it to letter
        answerArray[i] = letter;
      }
    }
//number of guesses
count++;
document.getElementById("provado").innerHTML = "provado: " + count;
document.getElementById("respondo").innerHTML = answerArray.join(" ");
}
