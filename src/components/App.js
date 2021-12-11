import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../constexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import * as auth from "../utils/auth"
import ProtectedRoute from "./ProtectedRoute";
import fail from "../images/fail.svg"
import success from "../images/success.svg"
import InfoTooltip from "./InfoTooltip";



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [mailName, setMailName] = React.useState('')
    const [popupImage, setPopupImage] = React.useState('')
    const [popupTitle, setPopupTitle] = React.useState('')
    const [infoTooltip, setInfoTooltip] = React.useState(false)


    const navigate = useNavigate()

    React.useEffect(() => {
        const jwt = localStorage.getItem("jwt")
        if (jwt) {
            auth.checkToken(jwt)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true)
                        setMailName(res.data.email)
                        navigate('/')
                    }
                })
                .catch((err) => {
                    console.log(`Не удалось получить токен: ${err}`)
                })
        }
    }, [navigate])

    function onRegister(email, password) {
        auth.register(email, password)
            .then(() => {
                setPopupImage(success)
                setPopupTitle("Вы успешно зарегистрировались!")
                navigate('/sign-in')
            })
            .catch(() => {
                setPopupImage(fail)
                setPopupTitle('Что-то пошло не так! Попробуйте ещё раз.')
            })
            .finally(handleInfoTooltip)

    }

    function onLogin(email, password) {
        auth.login(email, password)
            .then((res) => {
                localStorage.setItem('jwt', res.token)
                setIsLoggedIn(true)
                navigate('/')
            })
            .catch(() => {
                setPopupImage(fail)
                setPopupTitle('Не верные имя пользователя или пароль.')
                handleInfoTooltip()
            })
    }

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setCurrentUser(user)
                setCards(cards)
            })
            .catch((err) => {
                console.log(`Ошибка загрузки данных: ${err}`)
            })
    },[])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id)

        if (!isLiked) {
            api.addCardLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(`Не получилось поставить лайк: ${err}`)
                })
        } else {
            api.deleteCardLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(`Не получилось дизлайкнуть: ${err}`)
                })
        }
    }

    function handleDeleteCard(card) {
        api.deleteCard(card)
            .then(() => {
                setCards((items) => items.filter((c) => c._id !== card._id && c))
            })
            .catch((err) => {
                console.log(`Ошибка удаления карточки: ${err}`)
            })
    }

    function handleUpdateUser(data) {
        api.patchUserInfo(data)
            .then((newUser) => {
                setCurrentUser(newUser)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(`Не удалось обновить профиль: ${err}`)
            })
    }

    function handleAvatarUpdate(data) {
        api.updateAvatar(data)
            .then((newAvatar) => {
              setCurrentUser(newAvatar)
              closeAllPopups()
            })
            .catch((err) => {
                console.log(`Не удалось обновить аватар: ${err}`)
            })
    }

    function handleAddPlaceSubmit(data) {
        api.postNewCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards])
                closeAllPopups()
            })
            .catch((err) => {
                console.log(`Не удалось добавить карточку: ${err}`)
            })
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleInfoTooltip() {
        setInfoTooltip(true)
    }

    function closeOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            closeAllPopups()
        }
    }

    React.useEffect(() => {
        if (isAddPlacePopupOpen || isEditProfilePopupOpen || isEditAvatarPopupOpen || selectedCard || infoTooltip) {
            function handleEscape(evt) {
                if (evt.key === "Escape") {
                    closeAllPopups()
                }
            }

            document.addEventListener('keydown', handleEscape)

            return () => {
                document.removeEventListener('keydown', handleEscape)
            }
        }
    }, [isAddPlacePopupOpen, isEditProfilePopupOpen, isEditAvatarPopupOpen, selectedCard, infoTooltip])

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard(null)
        setInfoTooltip(false)
    }

    function onSignOut() {
        setIsLoggedIn(false)
        navigate('/sign-in')
        localStorage.removeItem("jwt")
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
              <Routes>
                  <Route path="/sign-in" element={
                      <>
                          <Header title="Регистрация" route="/sign-up" />
                          <Login onLogin={onLogin} />
                      </>

                  } />
                  <Route path="/sign-up" element={
                      <>
                          <Header title="Войти" route="/sign-in"/>
                          <Register onRegister={onRegister} />
                      </>

                  }/>
                  <Route path="/" element={
                      <>
                          <Header title="Выйти" mail={mailName} onClick={onSignOut} route=''/>
                          <ProtectedRoute
                              component={Main}
                              isLogged={isLoggedIn}
                              onEditAvatar={handleEditAvatarClick}
                              onEditProfile={handleEditProfileClick}
                              onAddPlace={handleAddPlaceClick}
                              onCardClick={handleCardClick}
                              cards={cards}
                              onCardLike={handleCardLike}
                              onDeleteCard={handleDeleteCard}
                          />
                          <Footer/>
                      </>
                  } />
                  <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/sign-in"}/>} />
              </Routes>


          <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          onOverlayClick={closeOverlayClick}
          />

          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onSubmit={handleUpdateUser}
              onOverlayClick={closeOverlayClick}/>
          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onSubmit={handleAvatarUpdate}
              onOverlayClick={closeOverlayClick}/>
          <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onSubmit={handleAddPlaceSubmit}
              onOverlayClick={closeOverlayClick}/>

          <InfoTooltip
              isOpen={infoTooltip}
              onClose={closeAllPopups}
              onOverlayClick={closeOverlayClick}
              image={popupImage}
              title={popupTitle}
              />
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
