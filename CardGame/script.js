let deck = [];
let currentCard;

const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function createDeck() {
  for (let value of values) {
    deck.push(value, value, value, value);
  }
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function dealCards() {
  const playerHand = [];
  const dealerHand = [];

  createDeck();

  shuffleDeck();
  console.log(deck);

  for (let i = 0; i < 2; i++) {
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());

    console.log(deck);
  }

  console.log(playerHand);
  console.log(dealerHand);
}

dealCards();
