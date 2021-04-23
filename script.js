cross = true;
score = 0;
audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
  audio.play();
}, 1000);
document.onkeydown = function (e) {
  // console.log(e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 80 + "px";
  }
  if (e.keyCode == 37) {
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = (dinoX - 80) + "px";
  }
};
setInterval(() => {
  dino = document.querySelector(".dino");
  obstacle = document.querySelector(".obstacle");
  gameOver = document.querySelector(".gameOver");
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );
  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY);
  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Game Over Reload To Start Again";
    obstacle.classList.remove("obstacleani");
    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 1000);
} 

else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);

setTimeout(() => {
  setDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
  newDur=setDur-0.1;
  console.log(newDur);
  document.querySelector(".obstacle").style.animationDuration=newDur+'s';
}, 1000);
}
}, 100);

function updateScore(score) {
  document.querySelector(".scoreCount").innerHTML="Your Score :"+score;
  // scoreCount.innerHTML = "Your Score: " + score;
}
