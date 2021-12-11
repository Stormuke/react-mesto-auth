function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? `popup_opened`: ""}`} onClick={props.onOverlayClick}>
            <div className="popup__container popup__container_size_m">
                <button type="button" className="popup__button-close" onClick={props.onClose}/>
                <img src={props.image} alt="Картинка авторизации" className="popup__picture"/>
                <h2 className="popup__title popup__title_theme_auth">{props.title}</h2>
            </div>
        </div>
    )
}

export default InfoTooltip