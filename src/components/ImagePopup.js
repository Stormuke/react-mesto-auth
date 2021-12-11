function ImagePopup(props) {
    return (
        <div className={`popup popup_theme_dark popup_form_fullscreen ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.onOverlayClick}>
            <div className="popup__container popup__container_size_l">
                <button type="button" className="popup__button-close" onClick={props.onClose}/>
                <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__image"/>
                <p className="popup__description">{props.card ? props.card.name : ''}</p>
            </div>
        </div>
    )
}

export default ImagePopup