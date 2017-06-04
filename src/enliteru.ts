var ltr = "" ;

function litero(elekto: string)
{
  montruLiteron(elekto);
  skribo(elekto);
}

function montruLiteron(ltr: string)
{
  document.getElementById(ltr+"but")!.style.visibility = "hidden";

  /*//here are the used letters
  amasigu = amasigu + ltr;
  //limits number of key entries to avoid overflow
  if (amasigu.length >= 28)
  {
    amasigu = [];
    document.getElementById("malkaŝu").innerHTML = "sufiĉas !";
  }
  document.getElementById("amasigu").innerHTML=amasigu.toUpperCase();*/
}
