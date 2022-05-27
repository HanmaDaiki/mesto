const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

class Card {
  constructor(data, templateSelector) {
    this._title = data.title;
    this._imageLink = data.link;
    this._openImageFunction = data.openImageFunction;
    this._templateSelector = templateSelector;
  }

  _delete(e) {
    e.target.closest(".card").remove();
  }

  _like(e) {
    e.target.classList.toggle("card__like_active");
  }

  generate() {
    const cardElement = this._templateSelector
      .querySelector(".card")
      .cloneNode(true);
    const imageCard = cardElement.querySelector(".card__image");
    const titleCard = cardElement.querySelector(".card__title");
    const buttonCardDelete = cardElement.querySelector(".card__delete");
    const buttonCardLike = cardElement.querySelector(".card__like");

    imageCard.src = this._imageLink;
    imageCard.alt = `Фото сделанное в ${this._title}`;
    imageCard.addEventListener("click", () =>
      this._openImageFunction(this._title, this._imageLink)
    );
    titleCard.textContent = this._title;
    buttonCardDelete.addEventListener("click", this._delete);
    buttonCardLike.addEventListener("click", this._like);

    return cardElement;
  }
}

export { Card, initialCards };
