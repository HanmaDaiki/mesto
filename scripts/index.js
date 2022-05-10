const page = document.querySelector('.page');
const blockCards = page.querySelector('.cards');
const cardTemplate = page.querySelector('#card-template').content;

const arrayCards = initialCards;

const popupInputs = page.querySelectorAll('.popup__input');

const profileName = page.querySelector('.profile__name');
const profileDiscription = page.querySelector('.profile__discription');
const buttonOpenAddCard = page.querySelector('.profile__add');
const buttonOpenEdit = page.querySelector('.profile__edit');

const popupEdit = page.querySelector('.popup_edit');
const popupEditOverlay = popupEdit.querySelector('.popup__overlay');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupEditInput = popupEdit.querySelector('.popup__input');
const popupEditInputName = popupEditForm.querySelector('.popup__input_type_name');
const popupEditInputDiscription = popupEditForm.querySelector('.popup__input_type_discription');
const buttonCloseEditPopup = popupEdit.querySelector('.popup__close');

const popupAddCard = page.querySelector('.popup_add-card');
const popupAddCardOverlay = popupAddCard.querySelector('.popup__overlay');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const popuAddCardInput = popupAddCard.querySelector('.popup__input');
const popupAddCardInputNameCard = popupAddCard.querySelector('.popup__input_type_name-card');
const popupAddCardInputLinkCard = popupAddCard.querySelector('.popup__input_type_link-card');
const buttonCloseAddCardPopup = popupAddCard.querySelector('.popup__close');

const popupImage = page.querySelector('.popup_image');
const popupImageOverlay = popupImage.querySelector('.popup__overlay');
const popupImageInput = popupImage.querySelector('.popup__input');
const popupImageImage = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const buttonCloseImagePopup = popupImage.querySelector('.popup__close');

const openPopup = (popup) => {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);
};

const closePopupEsc = (e) => {
  const popupActive = page.querySelector('.popup_active');
  if (e.key === 'Escape') {
    closePopup(popupActive);
  };
};

const openEditPopup = () => {
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputDiscription.value = profileDiscription.textContent;
};

const closeEditPopup = () => {
  closePopup(popupEdit);
};

const saveEditPopup = (e) => {
  e.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileDiscription.textContent = popupEditInputDiscription.value;
  closeEditPopup();
};

const openAddCardPopup = () => {
  openPopup(popupAddCard);
};

const closeAddCardPopup = () => {
  closePopup(popupAddCard);
};

const saveAddCardPopup = (e) => {
  e.preventDefault();
  blockCards.prepend(cereateCard(popupAddCardInputNameCard.value, popupAddCardInputLinkCard.value));
  closeAddCardPopup();
};

const openImagePopup = (title, link) => {
  openPopup(popupImage);

  popupImageImage.src = link;
  popupImageImage.alt = `Фото сделанное в ${title}`;

  popupImageTitle.textContent = title;
}

const closeImagePopup = () => {
  closePopup(popupImage);
}

const cereateCard = (title, link) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const imageCard = cardElement.querySelector('.card__image');
  const titleCard = cardElement.querySelector('.card__title');
  const buttonCardDelete = cardElement.querySelector('.card__delete');
  const buttonCardLike = cardElement.querySelector('.card__like');

  imageCard.src = link;
  imageCard.alt = `Фото сделанное в ${title}`;
  imageCard.addEventListener('click', () => openImagePopup(title, link));
  titleCard.textContent = title;
  buttonCardDelete.addEventListener('click', deleteCard);
  buttonCardLike.addEventListener('click', likeCard);

  return cardElement;
};

const renderCards = (array) => {
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
popupEditOverlay.addEventListener('click', closeEditPopup);
buttonCloseEditPopup.addEventListener('click', closeEditPopup);
popupEditForm.addEventListener('submit', saveEditPopup);

buttonOpenAddCard.addEventListener('click', openAddCardPopup);
popupAddCardOverlay.addEventListener('click', closeAddCardPopup);
buttonCloseAddCardPopup.addEventListener('click', closeAddCardPopup);
popupAddCardForm.addEventListener('submit', saveAddCardPopup);

popupImageOverlay.addEventListener('click', closeImagePopup);
buttonCloseImagePopup.addEventListener('click', closeImagePopup);
