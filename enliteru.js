var ltr = "" ;
var amasigu = [];

function litero(elekto) {

  montruLiteron(elekto);
   Letter(elekto);
 

 };

function montruLiteron(ltr)
{
  document.getElementById(ltr+"but").style.visiblity = "hidden";
  //here are the used letters
  amasigu = amasigu + ltr;
  //limits number of key entries to avoid overflow
  if (amasigu.length >= 28)
  {
    amasigu = [];
    document.getElementById("malkaŝu").innerHTML = "sufiĉas !";
  }
  document.getElementById("amasigu").innerHTML=amasigu.toUpperCase();
};
