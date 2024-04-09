import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../Login/Login.module.css";
import useForm from "../../hooks/useForm";

import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";


export default function Login() {

    const [loginError, setLoginError] = useState({});
    const [error, setError] = useState();
    const { onLogin } = useAuthContext();
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        try {
            const user = await authService.login(values);
            onLogin(user)
            navigate('/recipes');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: "",
        password: "",
    });

    const emailValidator = () => {
        if (!values.email.includes("@")) {
            setLoginError((state) => ({
                ...state,
                email: "E-mail should include '@', please enter a valid e-mail.",
            }));
        } else {
            if (loginError.email) {
                setLoginError((state) => ({ ...state, email: "" }));
            }
        }
    };
    
    const passwordValidator = () => {
        if (values.password.length < 6) {
            setLoginError((state) => ({
                ...state,
                password: "Password should be at least 6 chars",
            }));
        } else {
            if (loginError.password) {
                setLoginError((state) => ({ ...state, password: "" }));
            }
        }
    };

    return (
        <>
            <header className={styles.headerLogin}>
                <div className={`${styles.login} ${styles.page}`}>
                    <form
                        onSubmit={onSubmit}
                        className={`${styles.login} ${styles.form}`}
                    >
                        <h1>Login</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={onChange}
                            onBlur={emailValidator}
                            value={values['email']}
                            placeholder="name@abv.bg"
                        />
                        {loginError.email && (
                            <p className={styles.errorMessage}>{loginError.email}</p>
                        )}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={onChange}
                            value={values['password']}
                            onBlur={passwordValidator}
                            placeholder="*********"
                        />
                        {loginError.password && (
                            <p className={styles.errorMessage}>{loginError.password}</p>
                        )}

                        {error && <p className={styles.errorMessage}>{error}</p>}

                        <button
                        // disabled={Object.values(loginError).some((x) => x !== "")}
                        >
                            login
                        </button>
                        <p className={styles.message}>
                            Not registered? <Link to="/register">Create an account</Link>
                        </p>
                    </form>
                </div>
            </header>
        </>
    );
}
