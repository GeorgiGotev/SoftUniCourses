import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from '../Register/Register.module.css';

import useForm from '../../hooks/useForm';

export default function Register({ registerSubmitHandler }) {
    const { values, changeHandler, submitHandler } = useForm(
        registerSubmitHandler,
        {
            email: '',
            password: '',
            rePassword: '',
        }
    );

    return (
        <>
            <header className={style.headerRegister}>
                <div className={`${style.login} ${style.page}`}>
                    <form
                        onSubmit={submitHandler}
                        className={`${style.register} ${style.form}`}
                    >
                        <label htmlFor="username">Username</label>
                        <input type="text" name="name" placeholder="username" />
                        <label htmlFor="username">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values['email']}
                            onChange={changeHandler}
                            placeholder="name@abv.bg"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={values['password']}
                            onChange={changeHandler}
                            placeholder="*********"
                        />

                        <label htmlFor="password">Repeat Password</label>

                        <input
                            type="password"
                            name="rePassword"
                            id='rePassword'
                            value={values['rePassword']}
                            onChange={changeHandler}
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
