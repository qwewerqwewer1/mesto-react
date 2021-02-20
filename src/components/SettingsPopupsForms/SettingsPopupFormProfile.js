import React from 'react';

function SettingsPopupFormProfile() {
  return (
    <>
      <input
        id="popup__span_profile-title"
        name="profileName"
        placeholder="Имя"
        type="text"
        minlength="2"
        maxlength="40"
        className="popup__input popup__input_name_title"
        required
      />
      <span
        id="profileNameError"
        className="popup__span popup__span_profile-title-error"
      ></span>
      <input
        id="popup__span_profile-subtitle"
        name="profileProfession"
        placeholder="О себе"
        type="text"
        minlength="2"
        maxlength="200"
        className="popup__input popup__input_name_subtitle"
        required
      />
      <span
        id="profileProfessionError"
        className="popup__span popup__span_profile-subtitle-error"
      ></span>
    </>
  )
}

export default SettingsPopupFormProfile