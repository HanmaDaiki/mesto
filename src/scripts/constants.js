const validate = {
  popupForm: '.popup__form',
  popupInputs: '.popup__input',
  popupButtonSave: '.popup__save',
  popupButtonSaveInactive: 'popup__save_inactive',
  popupInputError: 'popup__input_error',
};

const cardContainer = document.querySelector('.cards');
const templateCard = document.querySelector("#card-template").content;

const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupEditInputName = popupEditForm.querySelector(
  ".popup__input_type_name"
);
const popupEditInputDescription = popupEditForm.querySelector(
  ".popup__input_type_discription"
);

const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const buttonOpenAddCard = document.querySelector('.profile__add');
const popupAddCardInputNameCard = popupAddCard.querySelector(
  ".popup__input_type_name-card"
);
const popupAddCardInputLinkCard = popupAddCard.querySelector(
  ".popup__input_type_link-card"
);

const selectorPopupImage = document.querySelector('.popup_image')

const nameInProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__discription');
const buttonOpenEdit = document.querySelector('.profile__edit');

export { validate, popupEditForm,
  popupAddCardForm, cardContainer,
  templateCard, selectorPopupImage,
  nameInProfile, descriptionProfile,
  popupEdit, popupAddCard,
  buttonOpenEdit, popupEditInputName,
  popupEditInputDescription, buttonOpenAddCard,
  popupAddCardInputNameCard, popupAddCardInputLinkCard,
};
