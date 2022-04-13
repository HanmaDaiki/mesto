const page = document.querySelector('.page');
const cards = page.querySelector('.cards');
const card = cards.querySelector('.card');
const popup = page.querySelector('.popup')
const edit = page.querySelector('.edit');

const profileName = page.querySelector('.profile__name');
const profileDiscription = page.querySelector('.profile__discription');
const buttonOpenEdit = page.querySelector('.profile__edit');
const buttonCloseEdit = edit.querySelector('.edit__close');
const inputName = edit.querySelector('.edit__name');
const inputDiscription = edit.querySelector('.edit__discription');

const openEdit = () => {
  popup.classList.add('popup_active');
  inputName.value = profileName.textContent;
  inputDiscription.value = profileDiscription.textContent;
};

const closeEdit = () => {
  popup.classList.remove('popup_active');  
};

const saveEdit = (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileDiscription.textContent = inputDiscription.value;
  popup.classList.remove('popup_active');
}

buttonOpenEdit.addEventListener('click', openEdit);
buttonCloseEdit.addEventListener('click', closeEdit);
edit.addEventListener('submit', saveEdit);