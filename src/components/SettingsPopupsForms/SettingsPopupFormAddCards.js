import React from 'react';

function SettingsPopupFormAddCards() {
  return (
    <>
      <input
        id="popup__span_add-title"
        name="addCardName"
        type="text"
        minlength="2"
        maxlength="30"
        placeholder="Название"
        className="popup__input popup__input_name_cardtitle"
        required
      />
      <span
        id="addCardNameError"
        className="popup__span popup__span_add-title-error"
      ></span>
      <input
        id="popup__span_add-url"
        name="addCardUrl"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_url_cardtitle"
        required
      />
      <span
        id="addCardUrlError"
        className="popup__span popup__span_add-url-error"
      ></span>
    </>
  )
}

export default SettingsPopupFormAddCards