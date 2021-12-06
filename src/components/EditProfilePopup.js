import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../constexts/CurrentUserContext";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    function changeName(evt) {
        setName(evt.target.value)
    }

    function changeDescription(evt) {
        setDescription(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()

        props.onSubmit({
            profile_name: name,
            profile_job: description
        })
    }

    React.useEffect(() => {
        if (props.isOpen) {
            setName(currentUser.name)
            setDescription(currentUser.about)
        }
    }, [props.isOpen, currentUser])

    return(
        <PopupWithForm
            onSubmit={handleSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
            form={'edit_profile'}
            title={'Редактировать профиль'}
            name={'edit'}
            onOverlayClick={props.onOverlayClick}
            >
            <input
                type="text"
                name="profile_name"
                className="popup__text"
                id="profile_name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                onChange={changeName}
                required
                value={name}
            />
            <span className="popup__text-error" id="profile_name-error"/>
            <input
                type="text"
                name="profile_job"
                className="popup__text"
                id="profile_job"
                placeholder="Профессиональная деятельность"
                minLength="2"
                maxLength="200"
                onChange={changeDescription}
                required
                value={description}
            />
            <span className="popup__text-error" id="profile_job-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup