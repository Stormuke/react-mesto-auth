import Card from "./Card";
import React from "react";
import { CurrentUserContext } from "../constexts/CurrentUserContext";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext)
    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <button type="button" className="profile__edit-avatar" onClick={props.onEditAvatar}>
                        <img src={currentUser.avatar} alt={currentUser.name}
                            className="profile__avatar"
                        />
                    </button>
                    <div className="profile__info">
                        <div className="profile__title-container">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}/>
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}/>
            </section>

            <section className="elements">
                {props.cards.map((card, id) => (
                <Card
                key={id}
                card={card}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onDeleteCard={props.onDeleteCard}
                />
                ))}
            </section>
        </main>
    )
}

export default Main