import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor(callBackSubmit, popup) {
    super(popup);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._listInput = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const objWithInputValues = {};
    this._listInput.forEach((item) => {
      objWithInputValues[item.name] = item.value;
    });
    return objWithInputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._callBackSubmit(this._getInputValues());
      super.close();
    });
  }
}