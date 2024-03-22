import { Link } from 'react-router-dom';
import style from '../Login/Login.module.css';
import useForm from '../../hooks/useForm';
import { useState } from 'react';

export default function Login({ loginSubmitHandler }) {
    const { values, changeHandler, submitHandler } = useForm(
        loginSubmitHandler,
        {
            email: '',
            password: '',
        }
    );

    return (
        <>
            <header className={style.headerLogin}>
                {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
                <div className={`${style.login} ${style.page}`}>
                    <form
                        onSubmit={submitHandler}
                        className={`${style.login} ${style.form}`}
                    >
                        <label htmlFor="username">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            value={values['email']}
                            placeholder="name@abv.bg"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={changeHandler}
                            value={values['password']}
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
