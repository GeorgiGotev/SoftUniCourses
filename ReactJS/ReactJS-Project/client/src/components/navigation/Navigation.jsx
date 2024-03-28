import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../../contexts/AuthContext';

export default function Navigation({ signOutHandler }) {

    const { isAuthenticated } = useAuthContext();

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
                        <Link className="nav-link" to="/recipes">
                            Recipes
                        </Link>
                    </li>

                    {isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">
                                    Add Recipe
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">
                                    My Profile
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item" onClick={signOutHandler}>
                                <Link className="nav-link" to="/logout">
                                    Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
