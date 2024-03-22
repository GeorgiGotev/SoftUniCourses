import style from '../Register/Register.module.css';

export default function Register() {
    return (
        <>
        <header className={style.headerRegister}>
            <div className={`${style.login} ${style.page}`}>
                    <form className={`${style.register} ${style.form}`}>
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className={style.message}>
                            Already registered? <a href="#">Sign In</a>
                        </p>
                    </form>
            </div>
            </header>
        </>
    );
}
