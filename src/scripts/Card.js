export default class Card {
  constructor(data, templateSelector) {
    this._title = data.title;
    this._imageLink = data.link;
    this._openImageFunction = data.handleCardClick;
    this._cardElement = templateSelector
      .querySelector(".card")
      .cloneNode(true);
    this._imageCard = this._cardElement.querySelector(".card__image");
    this._buttonCardLike = this._cardElement.querySelector(".card__like");
    this._titleCard = this._cardElement.querySelector(".card__title");
    this._buttonCardDelete = this._cardElement.querySelector(".card__delete");
  }

  _delete() {
    return this._cardElement.remove();
  }

  _like() {
    this._buttonCardLike.classList.toggle("card__like_active");
  }

  generate() {
    this._imageCard.src = this._imageLink;
    this._imageCard.alt = `Фото сделанное в ${this._title}`;
    this._imageCard.addEventListener("click", () => {
          this._openImageFunction(this._title, this._imageLink)
        }
    );
    this._titleCard.textContent = this._title;
    this._buttonCardDelete.addEventListener("click", this._delete.bind(this));
    
    this._buttonCardLike.addEventListener("click", () => {
      this._like(this)
    });

    return this._cardElement;
  }
}
