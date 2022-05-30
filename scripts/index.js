import { initialCards, Card } from "./Card.js";
import { FormValidator, validate } from "./FormValidator.js";

const page = document.querySelector(".page");
const blockCards = page.querySelector(".cards");
const cardTemplate = page.querySelector("#card-template").content;

const profileName = page.querySelector(".profile__name");
const profileDiscription = page.querySelector(".profile__discription");
const buttonOpenAddCard = page.querySelector(".profile__add");
const buttonOpenEdit = page.querySelector(".profile__edit");

const popupEdit = page.querySelector(".popup_edit");
const popupEditOverlay = popupEdit.querySelector(".popup__overlay");
const popupEditForm = popupEdit.querySelector(".popup__form");
const popupEditInputName = popupEditForm.querySelector(
  ".popup__input_type_name"
);
const popupEditInputDiscription = popupEditForm.querySelector(
  ".popup__input_type_discription"
);
const buttonCloseEditPopup = popupEdit.querySelector(".popup__close");

const popupAddCard = page.querySelector(".popup_add-card");
const popupAddCardOverlay = popupAddCard.querySelector(".popup__overlay");
const popupAddCardForm = popupAddCard.querySelector(".popup__form");
const popupAddCardInputNameCard = popupAddCard.querySelector(
  ".popup__input_type_name-card"
);
const popupAddCardInputLinkCard = popupAddCard.querySelector(
  ".popup__input_type_link-card"
);
const buttonCloseAddCardPopup = popupAddCard.querySelector(".popup__close");

const popupImage = page.querySelector(".popup_image");
const popupImageOverlay = popupImage.querySelector(".popup__overlay");
const popupImageImage = popupImage.querySelector(".popup__image");
const popupImageTitle = popupImage.querySelector(".popup__image-title");
const buttonCloseImagePopup = popupImage.querySelector(".popup__close");

const createCard = (title, link) => {
  return new Card(
    {
      title: title,
      link: link,
      openImageFunction: openImagePopup,
    },
    cardTemplate
  );
};

const openPopup = (popup) => {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closePopupEsc);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closePopupEsc);
};

const closePopupEsc = (e) => {
  if (e.key === "Escape") {
    const popupActive = page.querySelector(".popup_active");
    closePopup(popupActive);
  }
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
  popupAddCardInputNameCard.value = "";
  popupAddCardInputLinkCard.value = "";
  openPopup(popupAddCard);
};

const closeAddCardPopup = () => {
  closePopup(popupAddCard);
};

const saveAddCardPopup = (e) => {
  e.preventDefault();
  const card = createCard(
    popupAddCardInputNameCard.value,
    popupAddCardInputLinkCard.value
  );
  blockCards.prepend(card.generate());
  closeAddCardPopup();
};

const openImagePopup = (title, link) => {
  popupImageImage.src = link;
  popupImageImage.alt = `Фото сделанное в ${title}`;

  popupImageTitle.textContent = title;

  openPopup(popupImage);
};

const closeImagePopup = () => {
  closePopup(popupImage);
};

const renderCards = (array) => {
  array.forEach((element) => {
    const card = createCard(element.name, element.link);
    blockCards.append(card.generate());
  });
};

renderCards(initialCards);
const validPopupEditForm = new FormValidator(validate, popupEditForm);
validPopupEditForm.enableValidation();

const validPopupAddCardForm = new FormValidator(validate, popupAddCardForm);
validPopupAddCardForm.enableValidation();

buttonOpenEdit.addEventListener("click", openEditPopup);
popupEditOverlay.addEventListener("click", closeEditPopup);
buttonCloseEditPopup.addEventListener("click", closeEditPopup);
popupEditForm.addEventListener("submit", saveEditPopup);

buttonOpenAddCard.addEventListener("click", openAddCardPopup);
popupAddCardOverlay.addEventListener("click", closeAddCardPopup);
buttonCloseAddCardPopup.addEventListener("click", closeAddCardPopup);
popupAddCardForm.addEventListener("submit", saveAddCardPopup);

popupImageOverlay.addEventListener("click", closeImagePopup);
buttonCloseImagePopup.addEventListener("click", closeImagePopup);
