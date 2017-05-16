var poentoj = 0;
var vicoj = 0;
var vera = 0;
var ĝusta = 0;
//show countdown starting point for the new game display
var dekalkulo = 10;

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
        ĝusta++;
        if (ĝusta>0)
        {
          ĝusta = 1;
        }
      }
    };

//marking
vera=vera+ĝusta;
ĝusta=0;
vicoj++;
poentoj = vicoj-vera;
//set countdown starting number here
dekalkulo = 10-poentoj;
// if zero reveal answer
if (dekalkulo <1)
{
  dekalkulo = 0;
  malkaŝu();
}
document.getElementById("provado").innerHTML = dekalkulo;

document.getElementById("respondo").innerHTML = answerArray.join(" ");
};
