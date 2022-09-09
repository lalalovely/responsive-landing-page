const hamburgerMenuBtn = document.querySelector(".bar-btn");
const overlayMenu = document.querySelector(".overlay-nav");
const overlayCloseBtn = document.querySelector(".close-btn");

hamburgerMenuBtn.addEventListener("click", () => {
  overlayMenu.classList.add("active");
});

overlayCloseBtn.addEventListener("click", () => {
  overlayMenu.classList.remove("active");
});

var cardSelected;

setInitialSelectedCard();

function setInitialSelectedCard() {
  const cryptoCards = document.querySelectorAll(".cryptos .card");
  const card1 = cryptoCards[0];
  addCardSelectedClasses(card1);
  cardSelected = card1;
}

function addCardSelectedClasses(card) {
  card.classList.add("clicked");
  card.querySelector(".crypto-btn").classList.add("clicked");
  card.querySelector(".crypto-lg-btn").classList.add("clicked");
  card.querySelector(".name h2").classList.add("clicked");
  card.querySelector("p").classList.add("clicked");
}

function cardOnSelect(element) {
  if (cardSelected) {
    cardSelected.classList.remove("clicked");
    cardSelected.querySelector(".crypto-btn").classList.remove("clicked");
    cardSelected.querySelector(".crypto-lg-btn").classList.remove("clicked");
    cardSelected.querySelector(".name h2").classList.remove("clicked");
    cardSelected.querySelector("p").classList.remove("clicked");
  }
  addCardSelectedClasses(element);
  cardSelected = element;
}
