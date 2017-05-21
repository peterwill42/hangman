var ltr = "" ;
var amasigu = [];

function litero(elekto) {
  document.getElementById("montru").innerHTML = elekto + "but";
  montruLiteron(elekto);
   Letter(elekto);
 
   document.getElementById(elekto+"but").style.visiblity = "hidden";
 };

function montruLiteron(ltr)
{
  //here are the used letters
  amasigu = amasigu + ltr;
  //limits number of key entries to avoid overflow
  if (amasigu.length >= 28)
  {
    amasigu = [];
    document.getElementById("malkaŝu").innerHTML = "sufiĉas !"
  }
  document.getElementById("amasigu").innerHTML=amasigu.toUpperCase();
};
