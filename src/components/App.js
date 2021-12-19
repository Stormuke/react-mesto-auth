import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useEffect, useState} from "react";
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
import DeleteCardPopup from "./DeleteCardPopup";
import Spinner from "./Spinner";



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)
    const [currentUser, setCurrentUser] = useState({})
    const [cards, setCards] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [mailName, setMailName] = useState(null)
    const [popupImage, setPopupImage] = useState('')
    const [popupTitle, setPopupTitle] = useState('')
    const [infoTooltip, setInfoTooltip] = useState(false)
    const [loader, setLoader] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const jwt = localStorage.getItem("jwt")
        if (jwt) {
            setLoader(true)
            auth.checkToken(jwt)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true)
                        setMailName(res.data.email)
                    }
                })
                .catch((err) => {
                    console.log(`Не удалось получить токен: ${err}`)
                })
                .finally(() => {setLoader(false)})
        }
    }, [])

    useEffect(() => {
        if (isLoggedIn === true) {
            navigate('/')
        }
    }, [isLoggedIn, navigate])

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
                setMailName(email)
                navigate('/')
            })
            .catch(() => {
                setPopupImage(fail)
                setPopupTitle('Не верные имя пользователя или пароль.')
                handleInfoTooltip()
            })
    }

    useEffect(() => {
        setSpinner(true)
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setCurrentUser(user)
                setCards(cards)
            })
            .catch(() => {
                setPopupImage(fail)
                setPopupTitle('Ошибка загрузки приложения')
                handleInfoTooltip()
            })
            .finally(() => setSpinner(false))
    },[])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id)

        if (!isLiked) {
            api.addCardLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch(() => {
                    setPopupImage(fail)
                    setPopupTitle('Не получилось лайкнуть')
                    handleInfoTooltip()
                })
        } else {
            api.deleteCardLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    setPopupImage(fail)
                    setPopupTitle('Не получилось дизлайкнуть')
                    handleInfoTooltip()
                })
        }
    }

    function handleDeleteCard(card) {
        api.deleteCard(card)
            .then(() => {
                setCards((items) => items.filter((c) => c._id !== card._id && c))
                closeAllPopups()
            })
            .catch(() => {
                setPopupImage(fail)
                setPopupTitle('Не получилось дизлайкнуть')
                handleInfoTooltip()
            })
    }

    function handleUpdateUser(data) {
        api.patchUserInfo(data)
            .then((newUser) => {
                setCurrentUser(newUser)
                closeAllPopups()
            })
            .catch(() => {
                handleInfoTooltip()
                setPopupImage(fail)
                setPopupTitle('Не удалось обновить профиль попробуйте еще раз')
            })
    }

    function handleAvatarUpdate(data) {
        api.updateAvatar(data)
            .then((newAvatar) => {
              setCurrentUser(newAvatar)
              closeAllPopups()
            })
            .catch(() => {
                setPopupImage(fail)
                setPopupTitle('Не удалось обновить аватар')
                handleInfoTooltip()
            })
    }

    function handleAddPlaceSubmit(data) {
        api.postNewCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards])
            })
            .catch(() => {
                handleInfoTooltip()
                setPopupImage(fail)
                setPopupTitle('Не удалось добавить карточку попробуйте еще раз')
            })
    }

    function handleCardClick(card) {
        setSelectedCard(card)
        setIsImagePopupOpen(true)
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

    function handleDeleteCardClick(card) {
        setSelectedCard(card)
        setIsDeletePopupOpen(true)
    }

    function closeOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            closeAllPopups()
        }
    }

    useEffect(() => {
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
        setIsImagePopupOpen(false)
        setInfoTooltip(false)
        setIsDeletePopupOpen(false)
    }

    function onSignOut() {
        setIsLoggedIn(false)
        setMailName(null)
        navigate('/sign-in')
        localStorage.removeItem("jwt")
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
              <Routes>
                  <Route path="/sign-in" element={
                      <>
                          <Header title={loader ? "" : "Регистрация"} route="/sign-up" />
                          {loader ? <Spinner /> : <Login onLogin={onLogin}/>}
                      </>

                  }
                  />
                  <Route path="/sign-up" element={
                      <>
                          <Header title="Войти" route="/sign-in"/>
                          <Register onRegister={onRegister} />
                      </>

                  }
                  />
                  <Route exact path="/" element={
                      <>
                          <Header title={spinner ? "" : "Выйти"} mail={spinner ? "" : mailName} onClick={onSignOut} route=''/>
                          {spinner ? <Spinner/> :
                              <>
                                  <ProtectedRoute
                                      component={Main}
                                      isLogged={isLoggedIn}
                                      onEditAvatar={handleEditAvatarClick}
                                      onEditProfile={handleEditProfileClick}
                                      onAddPlace={handleAddPlaceClick}
                                      onCardClick={handleCardClick}
                                      onDeleteCard={handleDeleteCardClick}
                                      cards={cards}
                                      onCardLike={handleCardLike}
                                  />
                                  <Footer />
                              </>
                          }
                      </>
                  }
                  />
                  <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/sign-in"}/>} />
              </Routes>

          <ImagePopup
              isOpen={isImagePopupOpen}
              card={selectedCard}
              onClose={closeAllPopups}
              onOverlayClick={closeOverlayClick}
          />
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onSubmit={handleUpdateUser}
              onOverlayClick={closeOverlayClick}
          />
          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onSubmit={handleAvatarUpdate}
              onOverlayClick={closeOverlayClick}
          />
          <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onSubmit={handleAddPlaceSubmit}
              onOverlayClick={closeOverlayClick}
          />
          <InfoTooltip
              isOpen={infoTooltip}
              onClose={closeAllPopups}
              onOverlayClick={closeOverlayClick}
              image={popupImage}
              title={popupTitle}
          />

          <DeleteCardPopup
              isOpen={isDeletePopupOpen}
              onClose={closeAllPopups}
              onOverlayClick={closeOverlayClick}
              onSubmit={handleDeleteCard}
              card={selectedCard}
          />
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
