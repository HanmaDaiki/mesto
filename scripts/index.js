const page = document.querySelector('.page');
const cards = page.querySelector('.cards');
const popup = page.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupImage = page.querySelector('.popup-image');
const popupImageContainer = page.querySelector('.popup-image__container');
const profileName = page.querySelector('.profile__name');
const profileDiscription = page.querySelector('.profile__discription');
const buttonAddCard = page.querySelector('.profile__add');
const buttonOpenEdit = page.querySelector('.profile__edit');
const buttonClosePopup = popup.querySelector('.popup__close');
const popupTitle = popup.querySelector('.popup__title');
const inputName = popupForm.querySelector('.popup__input_type_name');
const inputDiscription = popupForm.querySelector('.popup__input_type_discription');

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

const deleteCard = (e) => {
  if (e.target.classList.contains('card__delete')) {
    initialCards.splice(Number(e.target.id), 1)
    renderCards(initialCards);
  }
}

const closePopupImage = () => {
  popupImage.classList.remove('popup-image_active');
  popupImageContainer.innerHTML = '';
};

const renderCards = (items) => {
  cards.innerHTML = '';
  items.forEach((item, index) => {
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
    cardDel.id = index;

    card.append(cardImage, cardTitle, cardLike, cardDel);
    cards.append(card);
  });
};

const like = (e) => {
  if (e.target.classList.contains('card__like')) e.target.classList.toggle('card__like_active')
};

const openImage = (e) => {
  if (e.target.classList.contains('card__image')) {
    popupImage.classList.add('popup-image_active');

    const image = document.createElement('img');
    image.classList.add('popup-image__image');
    image.src = e.target.src;
    image.alt = e.target.alt;

    const button = document.createElement('button');
    button.classList.add('popup-image__close');
    button.type = 'button';

    const title = document.createElement('h2');
    title.classList.add('popup-image__title');
    title.textContent = e.target.alt.replace('Фото сделанное в ', '');

    button.addEventListener('click', closePopupImage);

    popupImageContainer.append(button, image, title);
  };
};

const openAddCard = () => {
  popup.classList.add('popup_active');
  popupTitle.textContent = 'Новое место';
  inputName.value = '';
  inputDiscription.value = '';
  inputName.placeholder = 'Название';
  inputDiscription.placeholder = 'Ссылка на картинку';
};

const openEdit = () => {
  popup.classList.add('popup_active');
  popupTitle.textContent = 'Редактировать профиль';
  inputName.value = profileName.textContent;
  inputDiscription.value = profileDiscription.textContent;
};

const closePopup = () => {
  popup.classList.remove('popup_active');
};

const saveForm = (e) => {
  e.preventDefault();

  if (popupTitle.textContent === 'Новое место') {
    initialCards.unshift({
      name: inputName.value,
      link: inputDiscription.value
    });
    renderCards(initialCards);
  };

  if (popupTitle.textContent === 'Редактировать профиль') {
    profileName.textContent = inputName.value;
    profileDiscription.textContent = inputDiscription.value;
  };

  popup.classList.remove('popup_active');
};

renderCards(initialCards);
buttonAddCard.addEventListener('click', openAddCard);
buttonOpenEdit.addEventListener('click', openEdit);
buttonClosePopup.addEventListener('click', closePopup);
popupForm.addEventListener('submit', saveForm);
cards.addEventListener('click', like);
cards.addEventListener('click', openImage);
cards.addEventListener('click', deleteCard);
