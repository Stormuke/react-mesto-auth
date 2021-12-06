import React from "react";
import {CurrentUserContext} from "../constexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === currentUser._id
    const isLiked = props.card.likes.some(i => i._id === currentUser._id)

    const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_active' : ''}`)

    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`
    );

    function handleClick() {
        props.onCardClick(props.card)
    }

    function handleLike() {
        props.onCardLike(props.card)
    }

    function handleDelete() {
        props.onDeleteCard(props.card)
    }

    return(
        <article className="element">
            <img src={props.link} alt={props.name} className="element__image" onClick={handleClick}/>
            <button className={cardDeleteButtonClassName} onClick={handleDelete}/>
            <div className="element__content">
                <h2 className="element__title">{props.name}</h2>
                <div className="element__like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLike}/>
                    <p className="element__like-count">{props.likes}</p>
                </div>
            </div>
        </article>
    )
}

export default Card