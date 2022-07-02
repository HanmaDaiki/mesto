import FormValidator from "../scripts/components/FormValidator";
import Section from "../scripts/components/Section";
import UserInfo from "../scripts/components/UserInfo";
import Api from "../scripts/components/Api";
import Card from "../scripts/components/Card";
import PopupWithForm from "../scripts/components/PopupWithForm";
import PopupConfirmDelete from "../scripts/components/PopupConfirmDelete";
import PopupWithImage from "../scripts/components/PopupWithImage";

import {
  validate,
  popupEditForm,
  popupAddCardForm,
  cardContainer,
  descriptionProfile,
  nameInProfile,
  popupEdit,
  buttonOpenEdit,
  popupEditInputDescription,
  popupEditInputName,
  popupAddCard,
  buttonOpenAddCard,
  popupEditAvatar,
  avatar,
  popupDeleteCard,
  buttonOpenEditAvatar,
  selectorPopupImage,
  templateCard,
} from "../scripts/utils/constants.js";

import "./index.css";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-44",
  headers: {
    authorization: "9a69bfa9-7946-4a31-aa6c-90b45ffaa893",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  profileName: nameInProfile,
  profileDescription: descriptionProfile,
  avatar: avatar,
});

const sectionCard = new Section((card, userId, addMethod) => {
  const instanceCard = createCard(card, api, popupDelete, popupImage, userId);
  addMethod(instanceCard.generate());
},  cardContainer);

const popupImage = new PopupWithImage(selectorPopupImage);
popupImage.setEventListeners();

const popupAdd = new PopupWithForm((obj, close) => {
  api
    .addNewCard({ name: obj["card-name"], link: obj["card-link"] })
    .then((card) => {
      api.getUserInfo().then((user) => {
        sectionCard.renderNewItem(card, user._id);
      });
      close();
    })
    .catch((err) => {
      console.log(err);
    });
}, popupAddCard);
popupAdd.setEventListeners();

const popupDelete = new PopupConfirmDelete((id, card, close) => {
  api
    .deleteCard(id)
    .then(() => {
      card.remove();
      card = null;
      close();
    })
    .catch((err) => {
      console.log(err);
    });
}, popupDeleteCard);
popupDelete.setEventListeners();

const popupEditProfile = new PopupWithForm((obj, close) => {
  api
    .editInfoUser({ name: obj["edit-name"], about: obj["edit-discription"] })
    .then(() => {
      userInfo.setUserInfo({
        name: obj["edit-name"],
        description: obj["edit-discription"],
      });
      close();
    })
    .catch((err) => {
      console.log(err);
    });
}, popupEdit);
popupEditProfile.setEventListeners();

const popupEditAvatarForm = new PopupWithForm((obj, close) => {
  api
    .patchAvatar({ avatar: obj["avatar-link"] })
    .then(() => {
      userInfo.setAvatar(obj["avatar-link"]);
      close();
    })
    .catch((err) => {
      console.log(err);
    });
}, popupEditAvatar);
popupEditAvatarForm.setEventListeners();

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo({ name: user.name, description: user.about });
    userInfo.setAvatar(user.avatar);
    sectionCard.renderItems(cards, user._id);
  })
  .catch((err) => {
    console.log(err);
  });

const validPopupEditForm = new FormValidator(validate, popupEditForm);
validPopupEditForm.enableValidation();

const validPopupAddCardForm = new FormValidator(validate, popupAddCardForm);
validPopupAddCardForm.enableValidation();

const validPopupEditAvatarForm = new FormValidator(validate, popupEditAvatar);
validPopupEditAvatarForm.enableValidation();

buttonOpenEditAvatar.addEventListener("click", () => {
  validPopupEditAvatarForm.disabledButton();
  popupEditAvatarForm.open();
});

buttonOpenAddCard.addEventListener("click", () => {
  validPopupAddCardForm.disabledButton();
  popupAdd.open();
});

buttonOpenEdit.addEventListener("click", () => {
  const currentInfoUser = userInfo.getUserInfo();
  popupEditInputName.value = currentInfoUser.name;
  popupEditInputDescription.value = currentInfoUser.description;
  popupEditProfile.open();
});

const createCard = (card, api, instancePopupDeleteCard, instancePopupImage, userId) => {
  return new Card(
    {
      instancePopupImage: instancePopupImage,
      instancePopupDeleteCard: instancePopupDeleteCard,
      card: card,
      title: card.name,
      link: card.link,
      idCard: card._id,
      idOwner: card.owner._id,
      api: api,
      userId: userId,
    },
    templateCard
  );
};
