import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.css';
import useForm from '../../hooks/useForm';
import { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler, error } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    const [passwordError, setPasswordError] = useState('');

    const passwordValidator = () => {
        if (values.password.length < 6) {
            setPasswordError('Password should be at least 6 characters');
        } else {
            setPasswordError('');
        }
    };

    return (
        <>
            <header className={styles.headerLogin}>
                {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
                <div className={`${styles.login} ${styles.page}`}>
                    <form
                        onSubmit={onSubmit}
                        className={`${styles.login} ${styles.form}`}
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name={LoginFormKeys.Email}
                            onChange={onChange}
                            value={values[LoginFormKeys.Email]}
                            placeholder="name@abv.bg"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            onChange={onChange}
                            value={values[LoginFormKeys.Password]}
                            onBlur={passwordValidator}
                            placeholder="********"
                        />
                        {setPasswordError && (
                            <p className={styles.errorMessage}>
                                {passwordError}
                            </p>
                        )}

                        {error && (
                            <p className={styles.errorMessage}>{error}</p>
                        )}

                        <button disabled={passwordError}>login</button>
                        <p className={styles.message}>
                            Not registered?{' '}
                            <Link to="/register">Create an account</Link>
                        </p>
                    </form>
                </div>
            </header>
        </>
    );
}
