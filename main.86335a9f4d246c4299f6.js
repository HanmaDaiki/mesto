(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._listInputs=Array.from(n.querySelectorAll(e.popupInputs)),this._buttonSave=n.querySelector(e.popupButtonSave),this._popupInputError=e.popupInputError,this._buttonSaveInactive=e.popupButtonSaveInactive}var n,r;return n=t,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".error-".concat(e.id));e.classList.add(this._popupInputError),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".error-".concat(e.id));e.classList.remove(this._popupInputError),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._listInputs.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._listInputs.forEach((function(t){t.addEventListener("input",e._toggleButtonState.bind(e)),t.addEventListener("input",(function(){e._checkInputValidity(t)}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disabledButton():(this._buttonSave.classList.remove(this._buttonSaveInactive),this._buttonSave.disabled=!1)}},{key:"disabledButton",value:function(){this._buttonSave.classList.add(this._buttonSaveInactive),this._buttonSave.disabled=!0}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=n}var t,r;return t=e,(r=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t,n._addAppendItem.bind(n))}))}},{key:"renderNewItem",value:function(e,t){this._renderer(e,t,this._addPrependItem.bind(this))}},{key:"_addAppendItem",value:function(e){this._container.append(e)}},{key:"_addPrependItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.profileName,r=t.profileDescription,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileDescription=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,description:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description;this._profileName.textContent=t,this._profileDescription.textContent=n}},{key:"setAvatar",value:function(e){this._avatar.src="".concat(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editInfoUser",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._instancePopupImage=t.instancePopupImage,this._userId=t.userId,this._card=t.card,this._api=t.api,this._idCard=t.idCard,this._title=t.title,this._imageLink=t.link,this._instancePopupDeleteCard=t.instancePopupDeleteCard,this._cardElement=n.querySelector(".card").cloneNode(!0),this._imageCard=this._cardElement.querySelector(".card__image"),this._buttonCardLike=this._cardElement.querySelector(".card__like-button"),this._titleCard=this._cardElement.querySelector(".card__title"),this._buttonCardDelete=this._cardElement.querySelector(".card__delete"),this._cardCounterLike=this._cardElement.querySelector(".card__like-counter")}var t,n;return t=e,(n=[{key:"_isLiked",value:function(){var e=this;return this._card.likes.some((function(t){return t._id===e._userId}))}},{key:"_setEventListner",value:function(){var e=this;this._buttonCardLike.addEventListener("click",(function(){e._isLiked()?e._api.deleteLike(e._idCard).then((function(t){e._card=t,e._buttonCardLike.classList.remove("card__like-button_active"),e._cardCounterLike.textContent=t.likes.length})).catch((function(e){console.log(e)})):e._api.putLike(e._idCard).then((function(t){e._card=t,e._buttonCardLike.classList.add("card__like-button_active"),e._cardCounterLike.textContent=t.likes.length})).catch((function(e){console.log(e)}))})),this._imageCard.addEventListener("click",(function(){e._instancePopupImage.open(e._title,e._imageLink)})),this._buttonCardDelete.addEventListener("click",(function(){e._instancePopupDeleteCard.open(e._idCard,e._cardElement)}))}},{key:"generate",value:function(){return this._isLiked()?this._buttonCardLike.classList.add("card__like-button_active"):this._buttonCardLike.classList.remove("card__like-button_active"),this._card.owner._id!==this._userId&&this._buttonCardDelete.remove(),this._cardCounterLike.textContent=this._card.likes.length,this._imageCard.src=this._imageLink,this._imageCard.alt="Фото сделанное в ".concat(this._title),this._titleCard.textContent=this._title,this._setEventListner(),this._cardElement}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._buttonClose=this._popup.querySelector(".popup__close"),this._overlay=this._popup.querySelector(".popup__overlay"),this._closeMetod=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._buttonClose.addEventListener("click",this.close.bind(this)),this._overlay.addEventListener("click",this.close.bind(this))}},{key:"open",value:function(){document.addEventListener("keydown",this._closeMetod),this._popup.classList.add("popup_active")}},{key:"close",value:function(){document.removeEventListener("keydown",this._closeMetod),this._popup.classList.remove("popup_active")}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callBackSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._listInput=n._popup.querySelectorAll(".popup__input"),n._buttonSave=n._popup.querySelector(".popup__save"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._listInput.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){h(b(a.prototype),"close",this).call(this),this._buttonSave.textContent="Сохранить",this._listInput.forEach((function(e){e.value=""}))}},{key:"setEventListeners",value:function(){var e=this;h(b(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._buttonSave.textContent="Сохранение...",e._callBackSubmit(e._getInputValues(),(function(){e.close()}))}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function O(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callBackSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._buttonYes=n._popup.querySelector(".popup__save"),n}return t=a,(n=[{key:"open",value:function(e,t){w(C(a.prototype),"open",this).call(this),this._id=e,this._card=t}},{key:"close",value:function(){w(C(a.prototype),"close",this).call(this),this._buttonYes.textContent="Да"}},{key:"setEventListeners",value:function(){var e=this;w(C(a.prototype),"setEventListeners",this).call(this),this._buttonYes.addEventListener("click",(function(){e._buttonYes.textContent="Удаление...",e._callBackSubmit(e._id,e._card,(function(){e.close()}))}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._imageTitle=t._popup.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt="Фото сделаное в ".concat(e),this._imageTitle.textContent=e,j(U(a.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p),D={popupForm:".popup__form",popupInputs:".popup__input",popupButtonSave:".popup__save",popupButtonSaveInactive:"popup__save_inactive",popupInputError:"popup__input_error"},B=document.querySelector(".cards"),A=document.querySelector("#card-template").content,N=document.querySelector(".popup_edit"),V=N.querySelector(".popup__form"),M=V.querySelector(".popup__input_type_name"),Y=V.querySelector(".popup__input_type_discription"),J=document.querySelector(".popup_delete-card"),G=document.querySelector(".popup_edit-avatar"),H=document.querySelector(".avatar"),z=document.querySelector(".edit-avatar"),F=document.querySelector(".popup_add-card"),$=F.querySelector(".popup__form"),K=document.querySelector(".profile__add"),Q=document.querySelector(".popup_image"),W=document.querySelector(".profile__name"),X=document.querySelector(".profile__discription"),Z=document.querySelector(".profile__edit");function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=new c({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"9a69bfa9-7946-4a31-aa6c-90b45ffaa893","Content-Type":"application/json"}}),ne=new i({profileName:W,profileDescription:X,avatar:H}),re=new r((function(e,t,n){n(pe(e,te,ae,oe,t).generate())}),B),oe=new x(Q);oe.setEventListeners();var ie=new m((function(e,t){te.addNewCard({name:e["card-name"],link:e["card-link"]}).then((function(e){te.getUserInfo().then((function(t){re.renderNewItem(e,t._id)})),t()})).catch((function(e){console.log(e)}))}),F);ie.setEventListeners();var ae=new L((function(e,t,n){te.deleteCard(e).then((function(){t.remove(),t=null,n()})).catch((function(e){console.log(e)}))}),J);ae.setEventListeners();var ce=new m((function(e,t){te.editInfoUser({name:e["edit-name"],about:e["edit-discription"]}).then((function(){ne.setUserInfo({name:e["edit-name"],description:e["edit-discription"]}),t()})).catch((function(e){console.log(e)}))}),N);ce.setEventListeners();var ue=new m((function(e,t){te.patchAvatar({avatar:e["avatar-link"]}).then((function(){ne.setAvatar(e["avatar-link"]),t()})).catch((function(e){console.log(e)}))}),G);ue.setEventListeners(),Promise.all([te.getUserInfo(),te.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo({name:o.name,description:o.about}),ne.setAvatar(o.avatar),re.renderItems(i,o._id)})).catch((function(e){console.log(e)})),new t(D,V).enableValidation();var se=new t(D,$);se.enableValidation();var le=new t(D,G);le.enableValidation(),z.addEventListener("click",(function(){le.disabledButton(),ue.open()})),K.addEventListener("click",(function(){se.disabledButton(),ie.open()})),Z.addEventListener("click",(function(){var e=ne.getUserInfo();M.value=e.name,Y.value=e.description,ce.open()}));var pe=function(e,t,n,r,o){return new s({instancePopupImage:r,instancePopupDeleteCard:n,card:e,title:e.name,link:e.link,idCard:e._id,idOwner:e.owner._id,api:t,userId:o},A)}})();