let num = Math.floor(Math.random() * 100) + 1;
let gameOver = false;
let count = 0;
let bestCount = 0;

const bestScoreEle = document.getElementById("bestScore");
const guessedNumber = document.getElementById("numberEntered");
const info = document.getElementById("status");
const AttemptEle = document.getElementById("attempt");
const guessbtn = document.getElementById("guess");
const resetbtn = document.getElementById("reset");
guessbtn.addEventListener("click", () => {
  let guessNum = Number(guessedNumber.value);
  if (gameOver) return;
  count++;
  AttemptEle.textContent = count;

  if (num === guessNum) {
    gameOver = true;
    info.textContent = "You got it right";
    if ((bestCount != 0 && bestCount > count) || bestCount == 0) {
      bestScoreEle.textContent = count;
      bestCount = count;
    }
  } else if (num > guessNum) {
    info.textContent = `It's higher than ${guessNum}`;
  } else {
    info.textContent = `It's lower than ${guessNum}`;
  }
});

resetbtn.addEventListener("click", () => {
  num = Math.floor(Math.random() * 100) + 1;
  gameOver = false;
  count = 0;
  guessedNumber.value = "";
  AttemptEle.textContent = count;
  info.textContent = "Let's Start";
});
