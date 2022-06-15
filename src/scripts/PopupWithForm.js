import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor(callBackSubmit ,popup) {
    super(popup);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    const arrayWithInputValues = []
    this._popup.querySelectorAll('.popup__input').forEach((item) => {
      arrayWithInputValues.push(item.value)
    });
    return arrayWithInputValues;
  }


  setEventListeners() {
    this._buttonClose.addEventListener('click', this.close.bind(this));
    this._overlay.addEventListener('click', this.close.bind(this));
    document.addEventListener('keydown', this._closeMetod);
    this._form.addEventListener('submit', () => {
      this._callBackSubmit(this._getInputValues());
      super.close();
    });
  }
}