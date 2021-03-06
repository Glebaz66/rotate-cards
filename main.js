const cards = document.querySelectorAll('.cards');

function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const centerWidth = cardItem.offsetWidth / 2;
    const centerHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 
    'rotateX('+ - (event.offsetY - centerHeight) / 2 + 'deg) rotateY('+ - (centerWidth -event.offsetX) / 2 + 'deg)';
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}

cards.forEach(card => {
    card.addEventListener('mousemove', startRotate)
    card.addEventListener('mouseout', stopRotate)
});