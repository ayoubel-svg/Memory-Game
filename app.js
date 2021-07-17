const cards = document.querySelectorAll(".card");
const grid = document.querySelector(".grid");
const startBtn = document.querySelector(".start");
const time = document.querySelector(".timeJs");
const score = document.querySelector(".scoreJs");

let cardStatus = false;
let player1, player2;
let myTime = 60;
let result = 0;

function flipCards() {
  cards.forEach((card) =>
    card.addEventListener("click", () => {
      card.classList.add("flip");
      if (cardStatus === false) {
        player1 = card;
        cardStatus = true;
      } else {
        player2 = card;
        cardStatus = false;
        if (player1.dataset.origine == player2.dataset.origine) {
          player1.removeEventListener("click", flipCards);
          player2.removeEventListener("click", flipCards);
          result++;
        } else {
          setTimeout(() => {
            player1.classList.remove("flip");
            player2.classList.remove("flip");
          }, 500);
        }
      }
    })
  );
}
startBtn.addEventListener("click", flipCards, { once: true });
startBtn.addEventListener("click", timeLeft, { once: true });

function timeLeft() {
  myTime--;
  time.innerHTML = myTime;
  if (myTime == -1) {
    return alert("Game Over");
  }
  setTimeout(timeLeft, 1000);
}
