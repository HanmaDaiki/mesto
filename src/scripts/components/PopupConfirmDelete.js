import Popup from "./Popup";

export default class PopupConfirmDelete extends Popup {
  constructor(callBackSubmit, popup) {
    super(popup);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._buttonYes = this._popup.querySelector(".popup__save");
  }

  open(id, card) {
    super.open();
    this._id = id;
    this._card = card;
  }

  close() {
    super.close();
    this._buttonYes.textContent = 'Да';
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._buttonYes.textContent = 'Удаление...'
      this._callBackSubmit(this._id, this._card, () => {this.close()})
    });
  }
}
