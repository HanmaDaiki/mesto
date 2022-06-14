import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({link, desctiption}) {
    this._link = link;
    this._desctiption = desctiption;
    this._image = super._popup.querySelector(".popup__image");
    this._title = super._popup.querySelector(".popup__image-title");
  }

  open() {
    this._image.src = this._link;
    this._image.alt = `Фото сделаное в ${this._desctiption}`;
    this._title.textContainer = this._desctiption;

    super._popup.classList.add("popup_active");
  }
}