import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef()


    function handleSubmit(evt) {
        evt.preventDefault()

        props.onSubmit({
            avatar_link: avatarRef.current.value
        })
    }

    React.useEffect(() => {
        avatarRef.current.value = ''
    }, [props.isOpen])

    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            form={'edit_avatar'}
            title={'Обновить аватар'}
            name={'avatar'}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
            onOverlayClick={props.onOverlayClick}
            >
            <input
                ref={avatarRef}
                type="url"
                name="avatar_link"
                className="popup__text"
                id="avatar_link"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="popup__text-error" id="avatar_link-error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup