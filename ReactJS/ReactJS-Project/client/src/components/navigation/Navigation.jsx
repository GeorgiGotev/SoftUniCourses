// import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    // const { isAuthenticated } = useContext(AuthContext);

    return (
        <nav
            className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top"
            data-spy="affix"
            data-offset-top={10}
        >
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav"></ul>

                <Link className="navbar-brand m-auto" to="/">
                    <img src="./imgs/logo.svg" className="brand-img" alt="" />
                    <span className="brand-txt">Food Hunt</span>
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery">
                            Recipes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            Profile<span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
