const benjy = document.getElementById("pet");

function boop() {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.classList.add("heart"); 
  heart.style.top= (80 + Math.random() * 80) + "px";
  heart.style.left = (80 + Math.random() * 80) + "px";
  heart.addEventListener('animationend', function() {
  heart.remove();
  });
  document.body.appendChild(heart);
  console.log("Benjy was clicked!");
  if (benjy.src.includes("Benjy-no-boop.png")) {
  benjy.src = "Benjy-boop.png"
  }else{
    benjy.src = "Benjy-no-boop.png"
  }

}
benjy.addEventListener("click", boop);
