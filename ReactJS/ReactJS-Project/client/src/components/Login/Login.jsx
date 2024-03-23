import { Link } from 'react-router-dom';
import style from '../Login/Login.module.css';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext.jsx';

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};


export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

    return (
        <>
            <header className={style.headerLogin}>
                {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
                <div className={`${style.login} ${style.page}`}>
                    <form
                        onSubmit={onSubmit}
                        className={`${style.login} ${style.form}`}
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name={LoginFormKyes.Email}
                            onChange={onChange}
                            value={values[LoginFormKyes.Email]}
                            placeholder="name@abv.bg"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name={LoginFormKyes.Password}
                            onChange={onChange}
                            value={values[LoginFormKyes.Password]}
                            placeholder="********"
                        />
                        <button>login</button>
                        <p className={style.message}>
                            Not registered?{' '}
                            <Link to="/register">Create an account</Link>
                        </p>
                    </form>
                </div>
            </header>
        </>
    );
}
