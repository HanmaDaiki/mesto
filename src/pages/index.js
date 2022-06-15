import Card  from "../scripts/Card.js";
import FormValidator  from "../scripts/FormValidator.js";
import Section from "../scripts/Section";
import PopupWithImage from "../scripts/PopupWithImage";
import PopupWithForm from "../scripts/PopupWithForm";
import UserInfo from "../scripts/UserInfo";

import { initialCards } from '../scripts/data.js';
import {
  validate, popupEditForm,
  popupAddCardForm, cardContainer,
  templateCard, popupImage,
  descriptionProfile, nameInProfile,
  popupEdit, buttonOpenEdit,
  popupEditInputDescription, popupEditInputName,
  popupAddCard, buttonOpenAddCard
} from '../scripts/constants.js';
import { disabledButton } from '../scripts/utils.js';

import './index.css';

const sectionCard = new Section({items: initialCards, renderer: (item) => {
        const card = new Card(
            {
                title: item.name,
                link: item.link,
                handleCardClick: (title, link) => {
                    const popup = new PopupWithImage({title, link}, popupImage);
                    popup.open();
                    popup.setEventListeners();
                },
            },
            templateCard
        );
        cardContainer.append(card.generate())
    }}, cardContainer)

const userInfo = new UserInfo({profileName: nameInProfile,
  profileDescription: descriptionProfile})

const popupEditProfile = new PopupWithForm((array)=>{
  userInfo.setUserInfo({name: array[0], description: array[1]})
}, popupEdit)

const popupAdd = new PopupWithForm((array) => {
  const card = new Card(
    {
      title: array[0],
      link: array[1],
      handleCardClick: (title, link) => {
        const popup = new PopupWithImage({title, link}, popupImage);
        popup.open();
        popup.setEventListeners();
      },
    },
    templateCard
  );

  sectionCard.addItem(card.generate());
}, popupAddCard)

sectionCard.renderItems();

const validPopupEditForm = new FormValidator(validate, popupEditForm);
validPopupEditForm.enableValidation();

const validPopupAddCardForm = new FormValidator(validate, popupAddCardForm);
validPopupAddCardForm.enableValidation();

buttonOpenAddCard.addEventListener('click', () => {
  popupAdd.setEventListeners();
  popupAdd.open();
})

buttonOpenEdit.addEventListener('click', () => {
  const currentInfoUser = userInfo.getUserInfo();
  popupEditInputName.value = currentInfoUser.name;
  popupEditInputDescription.value = currentInfoUser.description;
  popupEditProfile.setEventListeners();
  popupEditProfile.open();
});