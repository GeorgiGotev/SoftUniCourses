import style from '../Login/Login.module.css';

export default function Login() {
    return (
        <>
            <div className={`${style.login} ${style.page}`}>
                <form className={`${style.login} ${style.form}`}>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>login</button>
                    <p className={style.message}>
                        Not registered? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>
        </>
    );
}
