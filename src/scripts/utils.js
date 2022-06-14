const disabledButton = (button) => {
  button.disabled = true;
  button.classList.add('popup__save_inactive');
} 

export { disabledButton };