var poentoj = 0;
var vicoj = 0;
var vera = 0;
var ĝusta = 0;
//show countdown starting point for the new game display
var dekalkulo = 10;

function Letter(elekto)
{
  //here is the letter typed by the user
  var letter =elekto;

    for (var i = 0; i < hazardaVorto.length; i++)
    {
      //if matching letter entered by user
      if (hazardaVorto[i] === letter)
      {
        //assign it to letter
        respondaro[i] = letter;
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

document.getElementById("respondo").innerHTML = respondaro.join(" ");
};
