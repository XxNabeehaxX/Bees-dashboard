const benjy = document.getElementById("pet");

function boop() {
  console.log("Benjy was clicked!");
  if (benjy.src.includes("Benjy-no-boop.png")) {
  benjy.src = "Benjy-boop.png"
  }else{
    benjy.src = "Benjy-no-boop.png"
  }

}
benjy.addEventListener("click", boop);