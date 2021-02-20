import React from 'react';

function SettingsPopupFormAvatar() {
  return (
    <>
      <input
        id="popup__span_photo-url"
        name="inputPhoto"
        type="url"
        minlength="2"
        placeholder="URL"
        className="popup__input popup__input_url_photo"
        required
      />
      <span
        id="avatar-link"
        className="popup__span popup__span_photo-url-error"
      ></span>
    </>
  )
}

export default SettingsPopupFormAvatar