function Login() {
    return (
        <>
            <section className="login">
                <h2 className="login__title">Вход</h2>
                <form className="login__form">
                    <input type="email" className="login__input" placeholder="Email"/>
                    <input type="password" className="login__input" placeholder="Пароль" autoComplete="on"/>
                    <button type="submit" className="login__button">Войти</button>
                </form>
            </section>
        </>
    )
}

export default Login