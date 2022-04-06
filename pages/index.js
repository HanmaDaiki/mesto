let cards = document.querySelector('.cards');
let card = cards.querySelector('.card');
let buttonLike = card.querySelector('.card__like');

cards.addEventListener('click', (e) => {
  if(e.target.classList.contains('card__like')) e.target.classList.toggle('card__like_active');
});

