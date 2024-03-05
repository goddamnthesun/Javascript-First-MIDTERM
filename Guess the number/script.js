const startGameBtn = document.getElementById("start-game-btn");
const startGameContainer = document.getElementById("start-game-container");
const gameContainer = document.getElementById("game-container");
let maxNumber;
let username;
const submitGuessBtn = document.getElementById("submit-btn");
let randomAnswer;
let guess;
let score;

// starts the game and displays the game, if maxNumber is not inputed page restarts.

startGameBtn.addEventListener("click", function () {
  maxNumber = document.getElementById("max-number").value;
  maxNumber = Number(maxNumber);
  username = document.getElementById("username-text").value;
  randomAnswer = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomAnswer);
  let count = 0;
  if (!maxNumber) {
    location.reload();
  } else {
    startGameContainer.style.display = "none";
    gameContainer.style.display = "flex";
    document.getElementById(
      "game-text"
    ).textContent = `${username} Guess the number between 0 - ${maxNumber}`;

    // guess function

    submitGuessBtn.addEventListener("click", function () {
      guess = document.getElementById("guess-number").value;
      guess = Number(guess);
      pleaseEnter = document.getElementById("please-enter-number");
      higher = document.getElementById("higher");
      lower = document.getElementById("lower");

      // hint message animation reset on every click

      higher.style.animation = "none";
      lower.style.animation = "none";
      pleaseEnter.style.animation = "none";

      void higher.offsetWidth;
      void lower.offsetWidth;
      void pleaseEnter.offsetWidth;

      higher.style.animation = null;
      lower.style.animation = null;
      pleaseEnter.style.animation = null;

      // if guess is not a number, or is lowerer than the answer or higher it displays a hint.

      if (!guess) {
        pleaseEnter.classList.add("please");
        pleaseEnter.style.display = "flex";
        higher.style.display = "none";
        lower.style.display = "none";
      } else if (guess < randomAnswer) {
        pleaseEnter.style.display = "none";
        higher.classList.add("jiggle");
        higher.style.display = "flex";
        lower.style.display = "none";
        count++;
      } else if (guess > randomAnswer) {
        pleaseEnter.style.display = "none";
        higher.style.display = "none";
        lower.classList.add("jiggle");
        lower.style.display = "flex";
        count++;
        // on correct guess it displays "win screen" shows tries it took and score
      } else {
        higher.style.display = "none";
        lower.style.display = "none";
        pleaseEnter.style.display = "none";
        count++;
        console.log(typeof count);
        score = Math.ceil(maxNumber / count);
        document.getElementById(
          "your-score-text"
        ).textContent = `Congratulations ${username}, ${guess} is the answer. It took you ${count} tries and your score is ${score}!!!`;
        gameContainer.style.display = "none";
        document.getElementById("your-score-container").style.display = "flex";
      }
    });
  }
});
