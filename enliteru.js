var ltr = "" ;
var amasigu = [];

function litero(elekto) {
  montruLiteron(elekto);
   Letter();
  }

function montruLiteron(ltr)
{
  document.getElementById("montru").innerHTML=ltr;
  amasigu = amasigu + ltr;
  document.getElementById("amasigu").innerHTML=amasigu.toUpperCase();
  }
