import FormValidator  from "../scripts/FormValidator";
import Section from "../scripts/Section";
import PopupWithForm from "../scripts/PopupWithForm";
import UserInfo from "../scripts/UserInfo";
import Api from "../scripts/Api";
import PopupConfirmDelete from "../scripts/PopupConfirmDelete";

import {
  validate, popupEditForm,
  popupAddCardForm, cardContainer,
  descriptionProfile, nameInProfile,
  popupEdit, buttonOpenEdit,
  popupEditInputDescription, popupEditInputName,
  popupAddCard, buttonOpenAddCard,
  popupAddCardInputLinkCard, popupAddCardInputNameCard,
  popupEditAvatar, avatar,
  popupDeleteCard, buttonOpenEditAvatar
} from '../scripts/constants.js';
import { createCard } from '../scripts/utils.js';

import './index.css';

const userInfo = new UserInfo({profileName: nameInProfile,
  profileDescription: descriptionProfile, avatar: avatar})

const popupEditProfile = new PopupWithForm((obj)=>{
  api.editInfoUser({name: obj['edit-name'], about: obj['edit-discription']});
  userInfo.setUserInfo({name: obj['edit-name'], description: obj['edit-discription']});
}, popupEdit)
popupEditProfile.setEventListeners();

const popupDelete = new PopupConfirmDelete((id) => {
  api.deleteCard(id);
  updateSectionCard();
}, popupDeleteCard);
popupDelete.setEventListeners();

const popupEditAvatarForm = new PopupWithForm((obj)=>{
  api.patchAvatar({avatar: obj['avatar-link']});
  userInfo.setAvatar(obj['avatar-link']);
}, popupEditAvatar)
popupEditAvatarForm.setEventListeners();

const updateSectionCard = () => {
  cardContainer.innerHTML = '';
  api.getUserInfo().then(user => {
    api.getCards().then(cards => {
      const sectionCard = new Section({items: cards, renderer: (card) => {
          const instanceCard = createCard(
            user._id,
            card,
            api,
            popupDelete
          );
          sectionCard.addItem(instanceCard.generate());
        }}, cardContainer);
      sectionCard.renderItems();
    })
  })
}

const popupAdd = new PopupWithForm((obj) => {
  api.addNewCard({name: obj['card-name'], link: obj['card-link']});
  updateSectionCard();
}, popupAddCard)
popupAdd.setEventListeners();

const validPopupDeleteCard = new FormValidator(validate, popupDeleteCard);
validPopupDeleteCard.enableValidation();

const validPopupEditForm = new FormValidator(validate, popupEditForm);
validPopupEditForm.enableValidation();

const validPopupAddCardForm = new FormValidator(validate, popupAddCardForm);
validPopupAddCardForm.enableValidation();

const validPopupEditAvatarForm = new FormValidator(validate, popupEditAvatar);
validPopupEditAvatarForm.enableValidation();

buttonOpenEditAvatar.addEventListener('click', () => {
  popupEditAvatarForm.open();
})

buttonOpenAddCard.addEventListener('click', () => {
  popupAddCardInputLinkCard.value = '';
  popupAddCardInputNameCard.value = '';
  validPopupAddCardForm.disabledButton();
  popupAdd.open();
})

buttonOpenEdit.addEventListener('click', () => {
  const currentInfoUser = userInfo.getUserInfo();
  popupEditInputName.value = currentInfoUser.name;
  popupEditInputDescription.value = currentInfoUser.description;
  popupEditProfile.open();
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '9a69bfa9-7946-4a31-aa6c-90b45ffaa893',
    'Content-Type': 'application/json'
  },
});

api.getUserInfo().then(user => {
  userInfo.setUserInfo({name: user.name, description: user.about});
  userInfo.setAvatar(user.avatar);
  api.getCards().then(cards => {
    const sectionCard = new Section({items: cards, renderer: (card) => {
        const instanceCard = createCard(
          user._id,
          card,
          api,
          popupDelete
        );
        sectionCard.addItem(instanceCard.generate());
      }}, cardContainer);
    sectionCard.renderItems();
  })
})