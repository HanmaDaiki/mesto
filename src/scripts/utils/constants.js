const validate = {
  popupForm: ".popup__form",
  popupInputs: ".popup__input",
  popupButtonSave: ".popup__save",
  popupButtonSaveInactive: "popup__save_inactive",
  popupInputError: "popup__input_error",
};

const cardContainer = document.querySelector(".cards");
const templateCard = document.querySelector("#card-template").content;

const popupEdit = document.querySelector(".popup_edit");
const popupEditForm = popupEdit.querySelector(".popup__form");
const popupEditInputName = popupEditForm.querySelector(
  ".popup__input_type_name"
);
const popupEditInputDescription = popupEditForm.querySelector(
  ".popup__input_type_discription"
);

const popupDeleteCard = document.querySelector(".popup_delete-card");

const popupEditAvatar = document.querySelector(".popup_edit-avatar");
const avatar = document.querySelector(".avatar");
const buttonOpenEditAvatar = document.querySelector(".edit-avatar");

const popupAddCard = document.querySelector(".popup_add-card");
const popupAddCardForm = popupAddCard.querySelector(".popup__form");
const buttonOpenAddCard = document.querySelector(".profile__add");

const selectorPopupImage = document.querySelector(".popup_image");

const nameInProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__discription");
const buttonOpenEdit = document.querySelector(".profile__edit");

export {
  validate,
  popupEditForm,
  popupAddCardForm,
  cardContainer,
  templateCard,
  selectorPopupImage,
  nameInProfile,
  descriptionProfile,
  popupEdit,
  popupAddCard,
  buttonOpenEdit,
  popupEditInputName,
  popupEditInputDescription,
  buttonOpenAddCard,
  popupEditAvatar,
  avatar,
  popupDeleteCard,
  buttonOpenEditAvatar,
};
