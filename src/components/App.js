import React from 'react';
import '../index.css';

import Header from './Header';
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from './PopupWithForm'
import SettingsPopupFormAvatar from './SettingsPopupFormAvatar'
import SettingsPopupFormProfile from './SettingsPopupFormProfile'
import SettingsPopupFormAddCards from './SettingsPopupFormAddCards'
import ImagePopup from './ImagePopup'


function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setEditAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setEditAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAddPlacePopupOpen(false);
    setSelectedCard(null)
  }


  return (
    <>
      <div className="body">

        <Header />
        <div className="page">
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
          <Footer />
        </div>

        <PopupWithForm title='Обновить Аватар' name='formPhoto' buttonTitleSubmit='Cохранить' closePopup={closeAllPopups} openPopup={isEditAvatarPopupOpen}>
          <SettingsPopupFormAvatar />
        </PopupWithForm>
        <PopupWithForm title='Редактировать профиль' name='formProfile' buttonTitleSubmit='Cохранить' closePopup={closeAllPopups} openPopup={isEditProfilePopupOpen}>
          <SettingsPopupFormProfile />
        </PopupWithForm>
        <PopupWithForm title='Добавить карточку' name='formAddCards' buttonTitleSubmit='Добавить' closePopup={closeAllPopups} openPopup={isAddPlacePopupOpen}>
          <SettingsPopupFormAddCards />
        </PopupWithForm>
        <PopupWithForm title='Вы уверены?' name='deleteCard' buttonTitleSubmit='Удалить' />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>
    </>
  );
}

export default App;
