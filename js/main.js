const cards = document.querySelectorAll(".card");

for (const card of cards) {
  card.addEventListener("click", () => {
    clearCards(cards);
    card.classList.add("active");
  });
}

function clearCards(cards) {
  cards.forEach((slide) => {
    slide.classList.remove("active");
  });
}
