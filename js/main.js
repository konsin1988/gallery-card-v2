function activateCards(active) {
  const cards = document.querySelectorAll(".card");

  cards[active].classList.add("active");

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
}

activateCards(Math.floor(Math.random() * 5));
