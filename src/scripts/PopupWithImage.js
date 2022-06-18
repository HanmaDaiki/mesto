import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector(".popup__image");
    this._imageTitle = this._popup.querySelector(".popup__image-title");
  }

  open(title, link) {
    this._image.src = link;
    this._image.alt = `Фото сделаное в ${title}`;
    this._imageTitle.textContent = title;
    super.open();
  }
}