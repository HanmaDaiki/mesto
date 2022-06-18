export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._buttonClose = this._popup.querySelector('.popup__close');
    this._overlay = this._popup.querySelector('.popup__overlay');
    this._closeMetod = this._handleEscClose.bind(this);

  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._buttonClose.addEventListener('click', this.close.bind(this));
    this._overlay.addEventListener('click', this.close.bind(this));
  }

  open() {
    document.addEventListener('keydown', this._closeMetod);
    this._popup.classList.add("popup_active");
  }

  close() {
    document.removeEventListener('keydown', this._closeMetod);
    this._popup.classList.remove("popup_active");
  }
}