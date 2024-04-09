import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";
import useForm from "../../hooks/useForm";
import style from "../Register/Register.module.css";

export default function Register() {
    const [errors, setErrors] = useState({});
    const [error, setError] = useState()
    const { onLogin } = useAuthContext();

    const navigate = useNavigate();
    const registerSubmitHandler = async (values) => {
        try {
            const registeredUser = await authService.register(values);

            onLogin(registeredUser)
            navigate('/recipes');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        liked: [],
        displayName: "",
        email: "",
        password: "",
        rePassword: "",
    });
    const nameValidator = () => {
        if (values.displayName.length < 2) {
            setErrors((state) => ({
                ...state,
                displayName: "Name should be at least 2 characters",
            }));
        } else {
            if (errors.displayName) {
                setErrors((state) => ({ ...state, displayName: "" }));
            }
        }
    };
    const emailValidator = () => {
        if (!values.email.includes("@")) {
            setErrors((state) => ({
                ...state,
                email: "E-mail should include '@', please enter a valid e-mail.",
            }));
        } else {
            if (errors.email) {
                setErrors((state) => ({ ...state, email: "" }));
            }
        }
    };
    const passwordValidator = () => {
        if (values.password.length < 6) {
            setErrors((state) => ({
                ...state,
                password: "Password should be at least 6 characters",
            }));
        } else {
            if (errors.password) {
                setErrors((state) => ({ ...state, password: "" }));
            }
        }
    };

    const rePasswordValidator = () => {
        if (values.password !== values.rePassword) {
            setErrors((state) => ({
                ...state,
                rePassword: "Passwords don't match!",
            }));
        } else {
            if (errors.rePassword) {
                setErrors((state) => ({ ...state, rePassword: "" }));
            }
        }
        if (values.rePassword.length < 6) {
            setErrors((state) => ({
                ...state,
                rePassword: "Repeat password should be at least 6 characters",
            }));
        } else {
            if (errors.rePassword) {
                setErrors((state) => ({ ...state, rePassword: "" }));
            }
        }
    };

    return (
        <>
            <header className={style.headerRegister}>
                <div className={`${style.login} ${style.page}`}>
                    <form
                        onSubmit={onSubmit}
                        className={`${style.register} ${style.form}`}
                    >
                        <h1>Register</h1>
                        
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            name="displayName"
                            value={values["displayName"]}
                            onChange={onChange}
                            onBlur={nameValidator}
                            placeholder="username"
                        />
                        {errors.displayName && (
                            <p className={style.errorMessage}>{errors.displayName}</p>
                        )}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values['email']}
                            onChange={onChange}
                            onBlur={emailValidator}
                            placeholder="name@abv.bg"
                        />
                        {errors.email && (
                            <p className={style.errorMessage}>{errors.email}</p>
                        )}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={values['password']}
                            onChange={onChange}
                            onBlur={passwordValidator}
                            placeholder="*********"
                        />
                        {errors.password && (
                            <p className={style.errorMessage}>{errors.password}</p>
                        )}

                        <label htmlFor="password">Repeat Password</label>

                        <input
                            type="password"
                            name="rePassword"
                            id="rePassword"
                            value={values['rePassword']}
                            onChange={onChange}
                            onBlur={rePasswordValidator}
                            placeholder="*********"
                        />
                        {errors.rePassword && (
                            <p className={style.errorMessage}>{errors.rePassword}</p>
                        )}
                        {error && <p className={style.errorMessage}>{error}</p>}
                        <button>
                            create
                        </button>
                        <p className={style.message}>
                            Already registered? <Link to="/login">Sign In</Link>
                        </p>
                        <div>Please note that all fields are mandatory!</div>
                    </form>
                </div>
            </header>
        </>
    );
}
