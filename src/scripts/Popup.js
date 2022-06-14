export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._buttonClose = this._popup.querySelector(".popup__close");
    this._overlay = this._popup.querySelector(".popup__overlay");
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._buttonClose.setEventListeners(click, this.close);
    this._overlay.setEventListeners(click, this.close);
    
  }

  open() {
    this._popup.classList.add("popup_active");
  }

  close() {
    this._popup.classList.remove("popup_active");
  }
}