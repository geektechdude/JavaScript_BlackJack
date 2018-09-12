// geektechstuff

// BlackJack

// Function to add array values
function add(a, b) {
    return a + b;
}

// variable to hold the deck of 52 cards
var deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11];

// variable to hold players hand
var pHand = [];

// variable to hold dealers hand
var bHand = [];

// variable to choose a random card from the deck

// player card 1
var card = deck[Math.floor(Math.random()*deck.length)],
add_phand = pHand.push(card),
card_remove = card,
position = deck.indexOf(card);
if (~position) deck.splice(position, 1);

// player card 2
var card = deck[Math.floor(Math.random()*deck.length)],
add_phand = pHand.push(card),
card_remove = card,
position = deck.indexOf(card);
if (~position) deck.splice(position, 1);

// banker card 1
var card = deck[Math.floor(Math.random()*deck.length)],
add_bhand =  bHand.push(card),
card_remove = card,
position = deck.indexOf(card);
if (~position) deck.splice(position, 1);

// banker card 2
var card = deck[Math.floor(Math.random()*deck.length)],
add_bhand =  bHand.push(card),
card_remove = card,
position = deck.indexOf(card);
if (~position) deck.splice(position, 1);

// Dealer Hand reduced to value
currentDealerHand = bHand.reduce(add,0);
if (currentDealerHand <= 20) {
    while (currentDealerHand <= 18) {
        var card = deck[Math.floor(Math.random() * deck.length)],
            add_bhand = bHand.push(card),
            card_remove = card,
            position = deck.indexOf(card);
        if (~position) deck.splice(position, 1);
        currentDealerHand = bHand.reduce(add, 0);
    }
}

console.warn('Player has:',pHand);

// Player had reduced to value
var currentPlayerHand = pHand.reduce(add,0);
console.warn('Player current has a value of: ', currentPlayerHand);

// if Player has 21 then Player wins
if (currentPlayerHand == 21){
status='Player Wins!',
console.warn(status);
} else if (currentPlayerHand >= 21){
    status='Player goes bust!'
    var currentPlayerHand = 0;
    console.warn(status);
} else {

// loop to either Hit (gain cards) or stick
keepPlaying = prompt("Hit (1) or Stick (2)");
} if (keepPlaying==1) {
    while (keepPlaying ==1 ) {
        var card = deck[Math.floor(Math.random() * deck.length)],
            add_phand = pHand.push(card),
            card_remove = card,
            position = deck.indexOf(card);
        if (~position) deck.splice(position, 1);
        console.warn('Player has:', pHand);
        var currentPlayerHand = pHand.reduce(add, 0);
        console.warn('Player current has a value of: ', currentPlayerHand);

        if (currentPlayerHand == 21) {
            status = 'Player has 21!',
                console.warn(status);
            break;

        } else if (currentPlayerHand >= 21) {
            status = 'Player goes bust!'
            var currentPlayerHand = 0;
            console.warn(status);
            break;
        }
        keepPlaying = prompt("Hit (1) or Stick (2)");
    }
}

// Tell player what the dealer has
console.warn('Dealer has:', bHand);
console.warn('Dealer total:', currentDealerHand);
if (currentDealerHand >= 22){
    console.warn('Dealer has gone bust');
    var currentDealerHand = 0;
}

// Win definitions
if (currentPlayerHand > currentDealerHand){
        status='Player Wins'
        console.warn(status);
    } else if (currentPlayerHand <= currentDealerHand) {
        status = 'Dealer Wins'
        console.warn(status);
    }

// end game
console.warn('Game Over');