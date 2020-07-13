const cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const container = document.querySelector(".flex-container");
const renderCards = (cardsArray) => {
  container.innerHTML = "";
  cardsArray.map((individualCard) => {
    const div = document.createElement("div");
    div.classList.add(`card-${individualCard}`);
    div.innerText = individualCard;
    container.appendChild(div);
  });
};

const cardsShuffle = () => {
  cardsArray.sort(() => Math.random() - 0.5);
  renderCards(cardsArray);
};

const CardsSort = () => {
  cardsArray.sort((x, y) => x - y);
  renderCards(cardsArray);
};

renderCards(cardsArray);
