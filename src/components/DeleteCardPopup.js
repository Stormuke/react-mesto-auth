import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup(props) {
    function handleSubmit(evt) {
        evt.preventDefault()

        props.onSubmit(props.card)
    }

    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            title={'Подтвердите удаление'}
            buttonText={'Удалить'}
            name={'delete'}
            onSubmit={handleSubmit}
            onOverlayClick={props.onOverlayClick}
        />
    )
}

export default DeleteCardPopup