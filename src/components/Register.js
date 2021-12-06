import {Link} from "react-router-dom";

function Register() {
    return (
        <>
            <section className="login">
                <h2 className="login__title">Регистрация</h2>
                <form className="login__form">
                    <input type="email" className="login__input" placeholder="Email"/>
                    <input type="password" className="login__input" placeholder="Пароль" autoComplete="on"/>
                    <button type="submit" className="login__button">Зарегистрироваться</button>
                </form>
                <p className="login__text">Уже зарегистрированы? <Link to="/sing-in" className="login__link">Войти</Link></p>
            </section>
        </>
    )
}

export default Register