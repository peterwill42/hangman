var selx=10;

function niveloj()
{
  selx = parseInt((document.getElementById("selekto") as HTMLInputElement).value);
  document.getElementById("provado")!.innerHTML = selx + "";
};
