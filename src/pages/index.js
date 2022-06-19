import FormValidator  from "../scripts/FormValidator.js";
import Section from "../scripts/Section";
import PopupWithForm from "../scripts/PopupWithForm";
import UserInfo from "../scripts/UserInfo";

import { initialCards } from '../scripts/data.js';
import {
  validate, popupEditForm,
  popupAddCardForm, cardContainer,
  descriptionProfile, nameInProfile,
  popupEdit, buttonOpenEdit,
  popupEditInputDescription, popupEditInputName,
  popupAddCard, buttonOpenAddCard,
  popupAddCardInputLinkCard, popupAddCardInputNameCard,
  buttonSaveAddCard
} from '../scripts/constants.js';
import { createCard, disabledButton } from '../scripts/utils.js';

import './index.css';

const sectionCard = new Section({items: initialCards, renderer: (item) => {
        const card = createCard(item.name, item.link);
        cardContainer.append(card.generate())
    }}, cardContainer)
sectionCard.renderItems();

const userInfo = new UserInfo({profileName: nameInProfile,
  profileDescription: descriptionProfile})

const popupEditProfile = new PopupWithForm((obj)=>{
  userInfo.setUserInfo({name: obj['edit-name'], description: obj['edit-discription']})
}, popupEdit)
popupEditProfile.setEventListeners();

const popupAdd = new PopupWithForm((obj) => {
  const card = createCard(obj['card-name'], obj['card-link']);

  sectionCard.addItem(card.generate());
}, popupAddCard)
popupAdd.setEventListeners();

const validPopupEditForm = new FormValidator(validate, popupEditForm);
validPopupEditForm.enableValidation();

const validPopupAddCardForm = new FormValidator(validate, popupAddCardForm);
validPopupAddCardForm.enableValidation();

buttonOpenAddCard.addEventListener('click', () => {
  popupAddCardInputLinkCard.value = '';
  popupAddCardInputNameCard.value = '';
  disabledButton(buttonSaveAddCard);
  popupAdd.open();
})

buttonOpenEdit.addEventListener('click', () => {
  const currentInfoUser = userInfo.getUserInfo();
  popupEditInputName.value = currentInfoUser.name;
  popupEditInputDescription.value = currentInfoUser.description;
  popupEditProfile.open();
});