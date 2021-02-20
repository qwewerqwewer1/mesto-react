import React from 'react';
import '../index.css';
import api from '../utils/api';

import Header from './Header';
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from './PopupWithForm'
import SettingsPopupFormAvatar from './SettingsPopupsForms/SettingsPopupFormAvatar'
import SettingsPopupFormAddCards from './SettingsPopupsForms/SettingsPopupFormAddCards'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'

//Imports 11 pro
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setEditAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  React.useEffect(() => {
    api.getCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const likeRequest = !isLiked ? api.setLike(card._id) : api.delLike(card._id);
    likeRequest
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      }).catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.delCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => !(c._id === card._id));
        setCards(newCards);
      }).catch((err) => {
        console.log(err);
      });
  }
  //////////////////////////ЗЕЛЕНАЯ КНИГА ПОСМОТРЕТЬ ФИЛЬМ

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

  function handleUpdateUser(user) {
    api.setProfile(user.name, user.about)
      .then((updateInfoProfile) => {
        setCurrentUser(updateInfoProfile);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>

        <div className="body">
          <Header />
          <div className="page">
            <Main cards={cards} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardDelete={handleCardDelete} onCardClick={handleCardClick} onCardLike={handleCardLike} />
            <Footer />
          </div>

          <PopupWithForm title='Обновить Аватар' name='formPhoto' buttonTitleSubmit='Cохранить' closePopup={closeAllPopups} openPopup={isEditAvatarPopupOpen}>
            <SettingsPopupFormAvatar />
          </PopupWithForm>

          <EditProfilePopup openPopup={isEditProfilePopupOpen} closePopup={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <PopupWithForm title='Добавить карточку' name='formAddCards' buttonTitleSubmit='Добавить' closePopup={closeAllPopups} openPopup={isAddPlacePopupOpen}>
            <SettingsPopupFormAddCards />
          </PopupWithForm>
          <PopupWithForm title='Вы уверены?' name='deleteCard' buttonTitleSubmit='Удалить' />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>

      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
