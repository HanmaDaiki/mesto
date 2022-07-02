import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(callBackSubmit, popup) {
    super(popup);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._listInput = this._popup.querySelectorAll(".popup__input");
    this._buttonSave = this._popup.querySelector(".popup__save")
  }

  _getInputValues() {
    const objWithInputValues = {};
    this._listInput.forEach((item) => {
      objWithInputValues[item.name] = item.value;
    });
    return objWithInputValues;
  }

  close() {
    super.close();
    this._buttonSave.textContent = 'Сохранить';
    this._listInput.forEach(item => {
      item.value = '';
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._buttonSave.textContent = 'Сохранение...';
      this._callBackSubmit(this._getInputValues(), () => {this.close()});
    });
  }
}
