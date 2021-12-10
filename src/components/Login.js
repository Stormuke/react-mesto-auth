import {useState} from "react";

function Login(props) {
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
        props.onLogin(email, password)
    }

    return (
        <>
            <section className="login">
                <h2 className="login__title">Вход</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="login__input"
                        placeholder="Email"
                        onChange={handleMailInput}
                        required
                    />
                    <input
                        type="password"
                        className="login__input"
                        placeholder="Пароль"
                        autoComplete="on"
                        onChange={handlePasswordInput}
                        required
                    />
                    <button type="submit" className="login__button">Войти</button>
                </form>
            </section>
        </>
    )
}

export default Login