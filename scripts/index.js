const page = document.querySelector('.page');
const cards = page.querySelector('.cards');
const popup = page.querySelector('.popup');
const edit = page.querySelector('.edit');

const profileName = page.querySelector('.profile__name');
const profileDiscription = page.querySelector('.profile__discription');
const buttonOpenEdit = page.querySelector('.profile__edit');
const buttonCloseEdit = edit.querySelector('.edit__close');
const inputName = edit.querySelector('.edit__input_type_name');
const inputDiscription = edit.querySelector('.edit__input_type_discription');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const renderCards = (items) => {
  items.forEach((item) => {
    const card = document.createElement('article');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card__image');
    cardImage.src = item.link;
    cardImage.alt = `Фото сделанное в ${item.name}`;

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = item.name;

    const cardLike = document.createElement('button');
    cardLike.classList.add('card__like');
    cardLike.type = 'button';

    const cardDel = document.createElement('button');
    cardDel.classList.add('card__delete');
    cardDel.type = 'button';

    card.append(cardImage, cardTitle, cardLike, cardDel);
    cards.append(card);
  });
};

const openEdit = () => {
  popup.classList.add('popup_active');
  inputName.value = profileName.textContent;
  inputDiscription.value = profileDiscription.textContent;
};

const closeEdit = () => {
  popup.classList.remove('popup_active');
};

const saveEdit = (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileDiscription.textContent = inputDiscription.value;
  popup.classList.remove('popup_active');
};

buttonOpenEdit.addEventListener('click', openEdit);
buttonCloseEdit.addEventListener('click', closeEdit);
edit.addEventListener('submit', saveEdit);
renderCards(initialCards);
