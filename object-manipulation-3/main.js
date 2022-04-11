console.log('Lodash is loaded:', typeof _ !== 'undefined');

/* Step One */
/* Players */

var bobby = {
  name: 'Bobby',
  hand: 'right',
  cards: [],
  totalPoints: 0
};

var hama = {
  name: 'Hama',
  hand: 'left',
  cards: [],
  totalPoints: 0
};

var kuma = {
  name: 'Kuma',
  hand: 'right',
  cards: [],
  totalPoints: 0
};

var pama = {
  name: 'Pama',
  hand: 'right',
  cards: [],
  totalPoints: 0
};

const contestants = [bobby, hama, kuma, pama];
var contestantsProfile = [];

for (let i = 0; i < contestants.length; i++) {
  contestantsProfile.push(contestants[i]);
}
// console.log(contestantsProfile);

/* Step Two */
/* Card Deck */
var deck = [];
var rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

function getDeckofCards() {
  for (var i = 0; i < rank.length; i++) {
    for (var y = 0; y < suit.length; y++) {
      var card = {
        rank: rank[i],
        suit: suit[y]
      };
      deck.push(card);
    }
  }
  return deck;
}
getDeckofCards();

/* Step Three */
/* Shuffle the Deck */
// console.log(deck);
function shuffleDeck() {
  // console.log(deck);
  for (let i = deck.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * i);
    const temp = deck[i];
    // console.log(temp);
    deck[i] = deck[randomNumber];
    // console.log(deck[i]);
    deck[randomNumber] = temp;
  }
  return deck;
}
shuffleDeck();

/* Step Four */
/* Dealing the Cards */
function dealTwoCards() {
  // console.log(deck);
  // console.log(contestantsProfile);
  for (let i = 0; i < contestantsProfile.length; i++) {
    if (contestantsProfile[i].cards.length > 1) {
      break;
    } else {
      for (let y = i * 2; y <= (i * 2) + 1; y++) {
        contestantsProfile[i].cards.push(deck[y]);
      }
    }
  }
  return contestantsProfile;
}
dealTwoCards();

/* Step Five */
/* Adding up points */
function getTheWinner() {
  for (let i = 0; i < contestantsProfile.length; i++) {
    for (let y = 0; y < contestantsProfile[i].cards.length; y++) {
      if (_.isNaN(parseInt(contestantsProfile[i].cards[y].rank))) {
        if (contestantsProfile[i].cards[y].rank === 'Jack' ||
            contestantsProfile[i].cards[y].rank === 'Queen' ||
            contestantsProfile[i].cards[y].rank === 'King') {
          contestantsProfile[i].totalPoints = contestantsProfile[i].totalPoints + 10;
        } else if (contestantsProfile[i].cards[y].rank === 'Ace') {
          contestantsProfile[i].totalPoints = contestantsProfile[i].totalPoints + 11;
        }
      } else {
        var numberFromString = parseInt(contestantsProfile[i].cards[y].rank);
        contestantsProfile[i].totalPoints = contestantsProfile[i].totalPoints + numberFromString;
      }
    }
  }
  var highestPoints = 0;
  for (let y = 0; y < contestantsProfile.length; y++) {
    if (contestantsProfile[y].totalPoints > highestPoints) {
      highestPoints = contestantsProfile[y].totalPoints;
    } else {
      continue;
    }
  }
  for (let w = 0; w < contestantsProfile.length; w++) {
    if (contestantsProfile[w].totalPoints === highestPoints) {
      console.log(`${contestantsProfile[w].name} is the winner! Yay!`);
    }
  }
}
getTheWinner();
