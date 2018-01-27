function skribo(elekto, game)
{
  //here is the letter touched by the user
  var tuŝo =elekto;

    for (var i = 0; i < game.hazardaVorto.length; i++)
    {
      //if matching letter entered by user
      if (game.hazardaVorto[i] === tuŝo)
      {
        //assign it to tuŝo
        game.respondaro[i] = tuŝo;
        game.ĝusta++;
        if (game.ĝusta>0)
        {
          game.ĝusta = 1;
          //count correct letters
          game.korekta = game.korekta + game.ĝusta;
          //if all letters correct then win
          if (game.korekta>=game.hazardaVorto.length)
          {
          var num = Math.round(10*(game.dekalkulo/selx));

          //comm(ent)
          var comm = ["Ho! tio estis proksima", "En ordo", "Sufiĉe bona", "Ĝusta",
          "Bona laboro", "Bone farita", "Tre bona!", "Bonege!", "Stelulo!", "Mirigulo!"];
          document.getElementById("venkas").innerHTML = comm[num - 1];

          }
        }
      }
    };

//marking
game.vera=game.vera+game.ĝusta;
game.ĝusta=0;
game.vicoj++;
game.poentoj = game.vicoj-game.vera;
//set countdown starting number
game.dekalkulo = selx-game.poentoj;
// if zero reveal answer
if (game.dekalkulo <1)
{
  game.dekalkulo = 0;
  malkaŝu(game);
  document.getElementById("venkas").innerHTML = "pli bonan ŝancon venontfoje";
}
document.getElementById("provado").innerHTML = game.dekalkulo;
document.getElementById("respondo").innerHTML = game.respondaro.join(" ");

};
