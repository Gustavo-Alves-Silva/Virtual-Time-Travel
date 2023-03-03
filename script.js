const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");

let currentCardIndex = 0;

function showCard(index) {
  cards[currentCardIndex].classList.remove("active");
  currentCardIndex = (index + cards.length) % cards.length;
  cards[currentCardIndex].classList.add("active");
}

prevButton.addEventListener("click", () => {
  showCard(currentCardIndex - 1);
});

nextButton.addEventListener("click", () => {
  showCard(currentCardIndex + 1);
});

showCard(currentCardIndex);