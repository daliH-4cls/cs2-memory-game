console.log("Script started")

// Guesses variable
let guesses = 0;

// Variable storing 1st choice id, empty for start
let firstCardId = "";
// Variable for 2nd choice id
let secondCardId = "";

// Flips card, revealing text
function flipCard(cardId) {
    // Test and show if click is working on console
    console.log("click");

    // Gets the card element Id from HTML
    let flip = document.getElementById(cardId);
    // Changes color to set text to visible
    flip.style.color = "white";
    flip.style.backgroundColor = "violet";

    // Check which pick it is
    if (firstCardId == "") {
    // Remember user 1st choice
    firstCardId = cardId;
    //console.log(firstCardId);
    }
    else {
    // Remember user 2nd choice
    secondCardId = cardId;
    // Starts counting guesses
    guesses = guesses + 1;
    //console.log(secondCardId);
    //console.log("guesses =" + guesses);

    // Changes guess counter
    let guessDisplay = document.getElementById("guess-display");
    guessDisplay.innerText = "Guesses: " + guesses;

    // Call for checkForMatch and delay
    //checkForMatch();
    setTimeout(checkForMatch, 1000);
    }
}

// Checks for matches between cards
function checkForMatch() {
    // Gets HTML cards when clicked
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);

    // Checks for each cards in HTML text matches
    if (card1.innerText == card2.innerText) {
        card1.style.backgroundColor = "lightgreen";
        card2.style.backgroundColor = "lightgreen";
    }
    // For no matches
    else {
        card1.style.color = "rgb(199, 93, 199)";
        card1.style.backgroundColor = "rgb(199, 93, 199)";
        card2.style.color = "rgb(199, 93, 199)";
        card2.style.backgroundColor = "rgb(199, 93, 199)";
    }
    firstCardId = "";
    secondCardId = "";
}