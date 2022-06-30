export default class Card {
  constructor(data, templateSelector) {
    this._instancePopupImage = data.instancePopupImage;
    this._userId = data.userId;
    this._card = data.card;
    this._api = data.api;
    this._idCard = data.idCard;
    this._idOwner = data.idOwner;
    this._title = data.title;
    this._imageLink = data.link;
    this._instancePopupDeleteCard = data.instancePopupDeleteCard;
    this._cardElement = templateSelector
      .querySelector(".card")
      .cloneNode(true);
    this._imageCard = this._cardElement.querySelector(".card__image");
    this._buttonCardLike = this._cardElement.querySelector(".card__like-button");
    this._titleCard = this._cardElement.querySelector(".card__title");
    this._buttonCardDelete = this._cardElement.querySelector(".card__delete");
    this._cardCounterLike = this._cardElement.querySelector(".card__like-counter");
    this._counterLike = this._card.likes.length;
  }

  _updateCardLike () {
    this._api.getCards().then(cards => {
      cards.forEach(card => {
        if (card._id === this._idCard) {
          this._card = card;
          this._cardCounterLike.textContent = card.likes.length;
        }
      })
    })
  }

  generate() {
    this._card.likes.forEach(like => {
      if(like._id === this._userId){
        this._buttonCardLike.classList.add("card__like-button_active");
      } else {
        this._buttonCardLike.classList.remove("card__like-button_active");
      }
    })

    if(this._card.owner._id !== this._userId) {
      this._buttonCardDelete.remove();
    }

    this._cardCounterLike.textContent = this._card.likes.length;
    this._imageCard.src = this._imageLink;
    this._imageCard.alt = `Фото сделанное в ${this._title}`;
    this._imageCard.addEventListener("click", () => {
      this._instancePopupImage.open(this._title, this._imageLink);
    }
    );

    this._titleCard.textContent = this._title;
    this._buttonCardDelete.addEventListener("click", () => {
      this._instancePopupDeleteCard.open(this._idCard);
    });
    
    this._buttonCardLike.addEventListener("click", () => {
      if(this._card.likes.length === 0) {
        this._api.putLike(this._idCard);
        this._buttonCardLike.classList.add("card__like-button_active");
      } else {
        this._card.likes.forEach(like => {
          if(like._id === this._userId){
            this._api.deleteLike(this._idCard);
            this._buttonCardLike.classList.remove("card__like-button_active");
          } else if (like._id !== this._userId){
            this._api.putLike(this._idCard);
            this._buttonCardLike.classList.add("card__like-button_active");
          }
         })
      }
      this._updateCardLike();
    });

    return this._cardElement;
  }
}
