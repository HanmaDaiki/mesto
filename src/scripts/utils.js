import Card from "./Card";
import PopupWithImage from "./PopupWithImage";

import { selectorPopupImage, templateCard } from "./constants";

const popupImage = new PopupWithImage(selectorPopupImage);
popupImage.setEventListeners();

const createCard = (title, link) => {
  return new Card(
    {
      title: title,
      link: link,
      handleCardClick: () => {
        popupImage.open(title, link);
      },
    },
    templateCard
  );
};

const disabledButton = (button) => {
  button.disabled = true;
  button.classList.add('popup__save_inactive');
}

export { createCard, disabledButton };