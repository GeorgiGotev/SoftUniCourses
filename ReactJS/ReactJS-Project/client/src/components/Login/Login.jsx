import { Link } from "react-router-dom";
import styles from "../Login/Login.module.css";
import useForm from "../../hooks/useForm";
import { useContext, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler, error } = useAuthContext();
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });
  const [loginError, setLoginError] = useState("");

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
        {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
        <div className={`${styles.login} ${styles.page}`}>
          <form
            onSubmit={onSubmit}
            className={`${styles.login} ${styles.form}`}
          >
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name={LoginFormKeys.Email}
              onChange={onChange}
              onBlur={emailValidator}
              value={values[LoginFormKeys.Email]}
              placeholder="name@abv.bg"
            />
            {loginError.email && (
              <p className={styles.errorMessage}>{loginError.email}</p>
            )}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name={LoginFormKeys.Password}
              onChange={onChange}
              value={values[LoginFormKeys.Password]}
              onBlur={passwordValidator}
              placeholder="*********"
            />
            {setLoginError && (
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
