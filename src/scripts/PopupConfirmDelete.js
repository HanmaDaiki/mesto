import Popup from "./Popup";

export default class PopupConfirmDelete extends Popup {
  constructor(callBackSubmit, popup) {
    super(popup);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  open(id) {
    super.open();
    this._id = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._callBackSubmit(this._id);
      super.close();
    });
  }
}