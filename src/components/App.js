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
  const [isEditAddCardsPopupOpen, setEditAddCardsPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAddCardsClick() {
    setEditAddCardsPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAddCardsPopupOpen(false);
    setSelectedCard(null)
  }


  return (
    <>
      <body className="body">

        <Header />
        <div className="page">
          <Main onAvatar={handleEditAvatarClick} onProfile={handleEditProfileClick} onAddCards={handleEditAddCardsClick} onCardClick={handleCardClick} />
          <Footer />
        </div>

        <PopupWithForm title='Обновить Аватар' name='formPhoto' buttonTitleSubmit='Cохранить' closePopup={closeAllPopups} openPopup={isEditAvatarPopupOpen}>
          <SettingsPopupFormAvatar />
        </PopupWithForm>
        <PopupWithForm title='Редактировать профиль' name='formProfile' buttonTitleSubmit='Cохранить' closePopup={closeAllPopups} openPopup={isEditProfilePopupOpen}>
          <SettingsPopupFormProfile />
        </PopupWithForm>
        <PopupWithForm title='Добавить карточку' name='formAddCards' buttonTitleSubmit='Добавить' closePopup={closeAllPopups} openPopup={isEditAddCardsPopupOpen}>
          <SettingsPopupFormAddCards />
        </PopupWithForm>
        <PopupWithForm title='Вы уверены?' name='deleteCard' buttonTitleSubmit='Удалить' />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </body>
    </>
  );
}

export default App;
