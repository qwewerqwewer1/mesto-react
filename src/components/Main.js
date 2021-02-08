import React from 'react';
import pointerButton from '../images/pointer.svg';
import plusButton from '../images/Vector.svg';
import api from '../utils/api'
import Card from './Card'


function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((initialUser) => {
        setUserName(initialUser.name);
        setUserDescription(initialUser.about);
        setUserAvatar(initialUser.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api.getCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__position">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}></div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
              <img
                src={pointerButton}
                alt="ручка-редактор"
              />
            </button>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
          <img
            alt="Плюс"
            src={plusButton}
            className="profile__plus"
          />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          )
        })}
      </section>
    </main>
  )
}

export default Main