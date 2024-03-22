import style from '../Login/Login.module.css';

export default function Login() {
    return (
        <>
        <header className={style.headerLogin}>
            {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
            <div className={`${style.login} ${style.page}`}>
                <form className={`${style.login} ${style.form}`}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="email" />
                    <label htmlFor="password">Password</label>

                    <input type="password" placeholder="password" />
                    <button>login</button>
                    <p className={style.message}>
                        Not registered? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>
            </header>
        </>
    );
}
