import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({title, link}, popup) {
    super(popup);
    this._title = title;
    this._link = link;
    this._image = this._popup.querySelector(".popup__image");
    this._imageTitle = this._popup.querySelector(".popup__image-title");
  }

  open() {
    this._image.src = this._link;
    this._image.alt = `Фото сделаное в ${this._title}`;
    this._imageTitle.textContent = this._title;
    this._popup.classList.add("popup_active");
  }
}