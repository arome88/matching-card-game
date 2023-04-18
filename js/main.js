// create array for cards
let cards = ['imgs/deloreon.jpg', 'imgs/doc.jpg', 'imgs/marty.jpg', 'imgs/movielogo.jpg', 'imgs/shoes.jpg',            
            'imgs/movielogo.jpg', 'imgs/shoes.jpg', 'imgs/deloreon.jpg', 'imgs/marty.jpg', 'imgs/doc.jpg'];

// assign images to each card
let images = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    images[i].querySelector('img').src = cards[i];
}

let selected = [];
let clicks = 0;

// shuffle cards
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}

// function to see if cards match
// if card 1 = card 2 - keep them flipped otherwise they flip back (hidden)
function checkCards() {
    if (selected[0].querySelector('img').src === selected[1].querySelector('img').src) {
        selected[0].classList.add('match');
        selected[1].classList.add('match');
    } else {
        selected[0].classList.remove('selected');
        selected[1].classList.remove('selected');
        selected[0].querySelector('img').classList.add('hidden');
        selected[1].querySelector('img').classList.add('hidden');
    }
    selected = [];
    clicks = 0;
}

// toggle + event listeners
let board = document.querySelector('.board');
board.addEventListener('click', (e) => {
    let card = e.target.closest('.card');
    if (card && !card.classList.contains('match') && selected.length < 2) {
        let img = card.querySelector('img');
        img.classList.remove('hidden');
        card.classList.add('selected');
        selected.unshift(card);
        clicks++;
        if (clicks === 2 && selected.length === 2) {
            checkCards();
        }
    }
});


// function to clear board and re-shuffle cards
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    selected = [];
    clicks = 0;
    cards = shuffle(cards);
    for (let i = 0; i < cards.length; i++) {
        images[i].querySelector('img').classList.remove('hidden', 'match');
        images[i].classList.remove('selected');
        images[i].querySelector('img').src = cards[i];
    }
});
