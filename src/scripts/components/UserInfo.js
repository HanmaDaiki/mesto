export default class UserInfo {
  constructor({ profileName, profileDescription, avatar}) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
    this._avatar = avatar;
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = about;
    this._avatar.src = avatar;
    this._userId = _id;
  }

  getUserId() {
    return this._userId;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
    };
  }
}
