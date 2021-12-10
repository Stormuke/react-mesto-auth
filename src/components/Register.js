import {Link} from "react-router-dom";
import {useState} from "react";

function Register(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleMailInput(evt) {
        setEmail(evt.target.value)
    }

    function handlePasswordInput(evt) {
        setPassword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onRegister(email, password)
    }

    return (
        <>
            <section className="login">
                <h2 className="login__title">Регистрация</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="login__input"
                        placeholder="Email"
                        onChange={handleMailInput}
                    />
                    <input
                        type="password"
                        className="login__input"
                        placeholder="Пароль"
                        autoComplete="on"
                        onChange={handlePasswordInput}
                    />
                    <button type="submit" className="login__button">Зарегистрироваться</button>
                </form>
                <p className="login__text">Уже зарегистрированы? <Link to="/sign-in" className="login__link">Войти</Link></p>
            </section>
        </>
    )
}

export default Register