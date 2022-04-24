const page = document.querySelector('.page');
const blockCards = page.querySelector('.cards');

const arrayCards = initialCards;

const profileName = page.querySelector('.profile__name');
const profileDiscription = page.querySelector('.profile__discription');
const buttonOpenAddCard = page.querySelector('.profile__add');
const buttonOpenEdit = page.querySelector('.profile__edit');

const popupEdit = page.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup-edit__form');
const popupEditInputName = popupEditForm.querySelector('.popup-edit__input_type_name');
const popupEditInputDiscription = popupEditForm.querySelector('.popup-edit__input_type_discription');
const buttonCloseEditPopup = popupEdit.querySelector('.popup-edit__close');

const popupAddCard = page.querySelector('.popup-add-card');
const popupAddCardInputNameCard = popupAddCard.querySelector('.popup-add-card__input_type_name-card');
const popupAddCardInputLinkCard = popupAddCard.querySelector('.popup-add-card__input_type_link-card')
const popupAddCardForm = popupAddCard.querySelector('.popup-add-card__form');
const buttonCloseAddCardPopup = popupAddCard.querySelector('.popup-add-card__close');

const popupImage = page.querySelector('.popup-image');
const popupImageImage = popupImage.querySelector('.popup-image__image');
const popupImageTitle = popupImage.querySelector('.popup-image__title');
const buttonCloseImagePopup = popupImage.querySelector('.popup-image__close');

const openEditPopup = () => {
  popupEdit.classList.add('popup-edit_active');
  popupEditInputName.value = profileName.textContent;
  popupEditInputDiscription.value = profileDiscription.textContent;
};

const closeEditPopup = () => {
  popupEdit.classList.remove('popup-edit_active');
};

const saveEditPopup = (e) => {
  e.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileDiscription.textContent = popupEditInputDiscription.value;
  closeEditPopup();
};

const openAddCardPopup = () => {
  popupAddCard.classList.add('popup-add-card_active');
};

const closeAddCardPopup = () => {
  popupAddCard.classList.remove('popup-add-card_active');
};

const saveAddCardPopup = (e) => {
  e.preventDefault();
  arrayCards.unshift({
    name: popupAddCardInputNameCard.value,
    link: popupAddCardInputLinkCard.value
  });
  renderCards(arrayCards);
  closeAddCardPopup();
};

const openImagePopup = (e) => {
  popupImage.classList.add('popup-image_active');

  popupImageImage.src = e.target.src;
  popupImageImage.alt = e.target.alt;

  popupImageTitle.textContent = e.target.alt.replace('Фото сделанное в ', '');
}
const closeImagePopup = () => {
  popupImage.classList.remove('popup-image_active');
}

const cereateCard = (title, link) => {
  const cardTemplate = page.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const imageCard = cardElement.querySelector('.card__image');
  const titleCard = cardElement.querySelector('.card__title');
  const buttonCardDelete = cardElement.querySelector('.card__delete');
  const buttonCardLike = cardElement.querySelector('.card__like');

  imageCard.src = link;
  imageCard.alt = `Фото сделанное в ${title}`;
  imageCard.addEventListener('click', openImagePopup);
  titleCard.textContent = title;
  buttonCardDelete.addEventListener('click', deleteCard);
  buttonCardLike.addEventListener('click', likeCard);

  return cardElement;
};

const renderCards = (array) => {
  blockCards.innerHTML = '';
  array.forEach(element => {
    blockCards.append(cereateCard(element.name, element.link));
  });
};

const deleteCard = (e) => {
  e.target.closest('.card').remove();
};

const likeCard = (e) => {
  e.target.classList.toggle('card__like_active');
};

renderCards(arrayCards);

buttonOpenEdit.addEventListener('click', openEditPopup);
buttonCloseEditPopup.addEventListener('click', closeEditPopup);
popupEditForm.addEventListener('submit', saveEditPopup);

buttonOpenAddCard.addEventListener('click', openAddCardPopup);
buttonCloseAddCardPopup.addEventListener('click', closeAddCardPopup);
popupAddCardForm.addEventListener('submit', saveAddCardPopup);

buttonCloseImagePopup.addEventListener('click', closeImagePopup);
