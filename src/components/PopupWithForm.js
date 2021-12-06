function PopupWithForm(props) {
    return (
        <div className={`popup popup_form_${props.name} ${props.isOpen ? `popup_opened`: ""}`} onClick={props.onOverlayClick}>
            <div className="popup__container">
                <button type="button" className="popup__button-close" onClick={props.onClose}/>
                <form name={props.form} className="popup__form" onSubmit={props.onSubmit}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                <button type="submit" className="popup__submit">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm