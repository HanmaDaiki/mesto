export default class UserInfo {
  constructor({ profileName, profileDescription, avatar}) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
    this._avatar = avatar;
  }

  getUserId(id){
    this._userId = id;
  }

  returnUserId() {
    return this._userId;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }

  setAvatar(link) {
    this._avatar.src = `${link}`;
  }
}
