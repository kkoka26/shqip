// 1. Flashcards Data
var flashcards = [
    {
        albanian: "Stinet",
        image: "images/stinet.jpg",
        audio: "audio/stinet.m4a"
    },
    {
        albanian: "Ne Plazh",
        image: "images/ne_plazh.jpg",
        audio: "audio/ne_plazh.m4a"
    },
    {
        albanian: "Dimri",
        image: "images/dimri.jpg",
        audio: "audio/dimri.m4a"
    },
    {
        albanian: "Vera",
        image: "images/vera.jpg",
        audio: "audio/vera.m4a"
    },
    {
        albanian: "Pranvera",
        image: "images/pranvera.jpg",
        audio: "audio/pranvera.m4a"
    },
    // Add more flashcards in the same format
];

// 2. Function to Create Flashcards
function createFlashcards() {
    var container = document.getElementById('flashcard-container');
    flashcards.forEach(function(card) {
        var cardElement = document.createElement('div');
        cardElement.className = 'flashcard';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.albanian}">
            <p>${card.albanian}</p>
        `;
        cardElement.onclick = function() { playSound(card.audio); };
        container.appendChild(cardElement);
    });
}

// 3. Function to Play Audio
function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

// Call the function to create flashcards when the page loads
window.onload = createFlashcards;
