// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

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
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#gallary">
                            Recipes
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#book-table">
                        Contact us
                    </a>
                </li>
                </ul>
                <a className="navbar-brand m-auto" href="#">
                    <img src="./imgs/logo.svg" className="brand-img" alt="" />
                    <span className="brand-txt">Food Hunt</span>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">
                            Profile<span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testmonial">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Register
                        </a>
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
