import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
    const [title, setTitle] = React.useState('')
    const [link, setLink] = React.useState('')

    function handleAddTitle(evt) {
        setTitle(evt.target.value)
    }
    function handleAddPhoto(evt) {
        setLink(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()

        props.onSubmit({
            name: title,
            link: link
        })

        props.onClose()
    }

    React.useEffect(() => {
        if (props.isOpen) {
            setTitle('')
            setLink('')
        }
    },[props.isOpen])

    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            form={'add_mesto'}
            title={'Новое место'}
            name={'add'}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
            onOverlayClick={props.onOverlayClick}
            >
            <input
                type="text"
                name="name"
                id="mesto_title"
                className="popup__text"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                value={title}
                required
                onChange={handleAddTitle}
            />
            <span className="popup__text-error" id="mesto_title-error"/>
            <input
                type="url"
                name="link"
                className="popup__text"
                id="mesto_link"
                placeholder="Ссылка на картинку"
                required
                onChange={handleAddPhoto}
                value={link}
            />
            <span className="popup__text-error" id="mesto_link-error"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup