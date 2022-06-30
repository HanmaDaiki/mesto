import Card from "./Card";
import PopupWithImage from "./PopupWithImage";

import { selectorPopupImage, templateCard } from "./constants";

const popupImage = new PopupWithImage(selectorPopupImage);
popupImage.setEventListeners();

const createCard = (userId, card, api, instancePopupDeleteCard) => {
  return new Card(
    {
      instancePopupImage: popupImage,
      instancePopupDeleteCard: instancePopupDeleteCard,
      userId: userId,
      card: card,
      title: card.name,
      link: card.link,
      idCard: card._id,
      idOwner: card.owner._id,
      api: api
    },
    templateCard
  );
};

export { createCard };