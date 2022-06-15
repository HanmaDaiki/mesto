import Card from "./Card";
import PopupWithImage from "./PopupWithImage";
import {popupImage, templateCard} from "./constants";

const disabledButton = (button) => {
  button.disabled = true;
  button.classList.add('popup__save_inactive');
}

const createCard = () => {
  return new Card(
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
}

export { disabledButton, createCard };