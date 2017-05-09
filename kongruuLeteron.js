function Letter()
{
  //here is the letter typed by the user
  var letter =document.getElementById("montru").innerHTML
//valid input checking
  if (letter.length > 0)
  {
    for (var i = 0; i < randomWord.length; i++)
    {
//if valid letter entered by user
      if (randomWord[i] === letter)
      {
        //assign it to letter
        answerArray[i] = letter;
      }
    }
//number of guesses
count++;
document.getElementById("nombrilo").innerHTML = "Attempts: " + count;
document.getElementById("respondo").innerHTML = answerArray.join(" ");
}
}
