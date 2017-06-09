var poentoj = 0;
var vicoj = 0;
var vera = 0;
var ĝusta = 0;
var korekta = 0;


//show countdown starting point for the new game
var dekalkulo = selx;

function skribo(elekto)
{
  //here is the letter touched by the user
  var tuŝo =elekto;

    for (var i = 0; i < hazardaVorto.length; i++)
    {
      //if matching letter entered by user
      if (hazardaVorto[i] === tuŝo)
      {
        //assign it to tuŝo
        respondaro[i] = tuŝo;
        ĝusta++;
        if (ĝusta>0)
        {
          ĝusta = 1;
          //count correct letters
          korekta = korekta + ĝusta;
          //if all letters correct then win
          if (korekta>=hazardaVorto.length)
          {
          document.getElementById("venkas").innerHTML = "VI VENKAS";
        }
        }
      }
    };

//marking
vera=vera+ĝusta;
ĝusta=0;
vicoj++;
poentoj = vicoj-vera;
//set countdown starting number
dekalkulo = selx-poentoj;
// if zero reveal answer
if (dekalkulo <1)
{
  dekalkulo = 0;
  malkaŝu();
  document.getElementById("venkas").innerHTML = "pli bonan ŝancon venontfoje";
}
document.getElementById("provado").innerHTML = dekalkulo;
document.getElementById("respondo").innerHTML = respondaro.join(" ");

};
