let page = document.querySelector('.page');

let cards = page.querySelector('.cards');
let card = cards.querySelector('.card');
let buttonLike = card.querySelector('.card__like');

let edit = page.querySelector('.edit');
let buttonOpenEdit = page.querySelector('.profile__edit');
let buttonCloseEdit = edit.querySelector('.edit__close');
let buttonSaveEdit = edit.querySelector('.edit__save');

let profileName = page.querySelector('.profile__name');
let profileDiscription = page.querySelector('.profile__discription');
let inputName = edit.querySelector('.edit__name');
let inputDiscription = edit.querySelector('.edit__discription');

cards.addEventListener('click', (e) => {
  if(e.target.classList.contains('card__like')) e.target.classList.toggle('card__like_active');
});

buttonOpenEdit.addEventListener('click', (e) => {
  e.preventDefault();
  edit.classList.add('edit_active');
  inputName.querySelector('.edit__input').placeholder = profileName.textContent;
  inputDiscription.querySelector('.edit__input').placeholder = profileDiscription.textContent;
});

buttonCloseEdit.addEventListener('click', (e) => {
  e.preventDefault();
  edit.classList.remove('edit_active');
});

buttonSaveEdit.addEventListener('click', (e) => {
  e.preventDefault();
  profileName.textContent = inputName.querySelector('.edit__input').value;
  profileDiscription.textContent = inputDiscription.querySelector('.edit__input').value;
  inputName.querySelector('.edit__input').placeholder = profileName.textContent;
  inputDiscription.querySelector('.edit__input').placeholder = profileDiscription.textContent;
  inputName.querySelector('.edit__input').value = '';
  inputDiscription.querySelector('.edit__input').value = '';
  edit.classList.remove('edit_active');
});