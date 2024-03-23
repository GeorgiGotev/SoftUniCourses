import { Link } from 'react-router-dom';
import { useContext } from "react";
import style from '../Register/Register.module.css';


import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'rePassword',
};


export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <>
            <header className={style.headerRegister}>
                <div className={`${style.login} ${style.page}`}>
                    <form
                        onSubmit={onSubmit}
                        className={`${style.register} ${style.form}`}
                    >
                        <label htmlFor="username">Username</label>
                        <input type="username" name="username" placeholder="username" />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values[RegisterFormKeys.Email]}
                            onChange={onChange}
                            placeholder="name@abv.bg"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={values[RegisterFormKeys.Password]}
                            onChange={onChange}
                            placeholder="*********"
                        />

                        <label htmlFor="password">Repeat Password</label>

                        <input
                            type="password"
                            name="rePassword"
                            id='rePassword'
                            value={values[RegisterFormKeys.ConfirmPassword]}
                            onChange={onChange}
                            placeholder="*********"
                        />

                        <button>create</button>
                        <p className={style.message}>
                            Already registered? <Link to="/login">Sign In</Link>
                        </p>
                    </form>
                </div>
            </header>
        </>
    );
}
