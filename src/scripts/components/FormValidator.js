export default class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._listInputs = Array.from(
      formElement.querySelectorAll(data.popupInputs)
    );
    this._buttonSave = formElement.querySelector(data.popupButtonSave);
    this._popupInputError = data.popupInputError;
    this._buttonSaveInactive = data.popupButtonSaveInactive;
  }

  _showInputError(input) {
    const errorElement = this._formElement.querySelector(`.error-${input.id}`);
    input.classList.add(this._popupInputError);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    const errorElement = this._formElement.querySelector(`.error-${input.id}`);
    input.classList.remove(this._popupInputError);
    errorElement.textContent = "";
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._listInputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _setEventListeners() {
    this._listInputs.forEach((input) => {
      input.addEventListener("input", this._toggleButtonState.bind(this));
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
      });
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disabledButton();
    } else {
      this._buttonSave.classList.remove(this._buttonSaveInactive);
      this._buttonSave.disabled = false;
    }
  }

  disabledButton() {
    this._buttonSave.classList.add(this._buttonSaveInactive);
    this._buttonSave.disabled = true;
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}
