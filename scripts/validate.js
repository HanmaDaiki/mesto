const validate = {
  popupForm: '.popup__form',
  popupInputs: '.popup__input',
  popupButtonSave: '.popup__save',
  popupButtonSaveInactive: 'popup__save_inactive',
  popupInputError: 'popup__input_error',
};

const showInputError = (formElement, inputElement, errorMessage, popupInputError) => {
  const errorElement = formElement.querySelector(`.error-${inputElement.id}`);
  inputElement.classList.add(popupInputError);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, popupInputError) => {
  const errorElement = formElement.querySelector(`.error-${inputElement.id}`);
  inputElement.classList.remove(popupInputError);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, popupInputError) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, popupInputError);
  } else {
    hideInputError(formElement, inputElement, popupInputError);
  }
};

const setEventListeners = (formElement, popupInputs, popupButtonSave, popupButtonSaveInactive, popupInputError) => {
  const inputList = Array.from(formElement.querySelectorAll(popupInputs));
  const buttonElement = formElement.querySelector(popupButtonSave);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, popupInputError);
      toggleButtonState(inputList, buttonElement, popupButtonSaveInactive);
    });
  });
};

const enableValidation = (validate) => {
  const formList = Array.from(document.querySelectorAll(validate.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, validate.popupInputs, validate.popupButtonSave, validate.popupButtonSaveInactive, validate.popupInputError);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, popupButtonSaveInactive) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(popupButtonSaveInactive)
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(popupButtonSaveInactive)
    buttonElement.disabled = false;
  }
};

enableValidation(validate);