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

const showInputError = (formElement, inputElement, errorMessage, popupInputError) => {
  const errorElement = formElement.querySelector(`.error-${inputElement.id}`);
  inputElement.classList.add(popupInputError);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, popupInputError) => {
  const errorElement = formElement.querySelector(`.error-${inputElement.id}`);
  inputElement.classList.remove(popupInputError);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, popupInputError) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, popupInputError);
  } else {
    hideInputError(formElement, inputElement, popupInputError);
  }
};

const setEventListeners = (formElement, popupInputs, popupButtonSave, popupButtonSaveInactive, popupInputError) => {
  const inputList = Array.from(formElement.querySelectorAll(popupInputs));
  const buttonElement = formElement.querySelector(popupButtonSave);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, popupInputError);
      toggleButtonState(inputList, buttonElement, popupButtonSaveInactive);
    });
  });
};

const enableValidation = (validate) => {
  const formList = Array.from(document.querySelectorAll(validate.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, validate.popupInputs, validate.popupButtonSave, validate.popupButtonSaveInactive, validate.popupInputError);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, popupButtonSaveInactive) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(popupButtonSaveInactive)
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(popupButtonSaveInactive)
    buttonElement.disabled = false;
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_active');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_active');
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
  arrayCards.unshift({
    name: popupAddCardInputNameCard.value,
    link: popupAddCardInputLinkCard.value
  });
  blockCards.prepend(cereateCard(arrayCards[0].name, arrayCards[0].link));
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

const closePopupEscEdit = (e) => {
  if (e.key === 'Escape') {
    closePopup(popupEdit);
  }
}

const closePopupEscAddCard = (e) => {
  if (e.key === 'Escape') {
    closePopup(popupAddCard);
  }
}

const closePopupEscImage = (e) => {
  if (e.key === 'Escape') {
    closePopup(popupImage);
  }
}

renderCards(arrayCards);

buttonOpenEdit.addEventListener('click', openEditPopup);
popupEditOverlay.addEventListener('click', closeEditPopup);
document.addEventListener('keydown', closePopupEscEdit);
buttonCloseEditPopup.addEventListener('click', closeEditPopup);
popupEditForm.addEventListener('submit', saveEditPopup);

buttonOpenAddCard.addEventListener('click', openAddCardPopup);
popupAddCardOverlay.addEventListener('click', closeAddCardPopup);
document.addEventListener('keydown', closePopupEscAddCard);
buttonCloseAddCardPopup.addEventListener('click', closeAddCardPopup);
popupAddCardForm.addEventListener('submit', saveAddCardPopup);

popupImageOverlay.addEventListener('click', closeImagePopup);
document.addEventListener('keydown', closePopupEscImage);
buttonCloseImagePopup.addEventListener('click', closeImagePopup);

enableValidation(validate);
