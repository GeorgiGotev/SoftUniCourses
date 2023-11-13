import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export default function Navigation(props) {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <Link className="navbar-brand" to="/">
                <img src="images/logo.png" alt="" />
                <span>freeze dried</span>
            </Link>
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
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">
                                {' '}
                                Fruits
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="service.html">
                                {' '}
                                Services{' '}
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">
                                Contact us
                            </Link>
                        </li>

                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contacts">
                                        Add product
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                        {!isAuthenticated && (
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
                    {/* <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                        <button
                            className="btn  my-2 my-sm-0 nav_search-btn"
                            type="submit"
                        />
                    </form> */}
                </div>
                {/* <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                    <a href="">Get A quote</a>
                </div> */}
            </div>
        </nav>
    );
}
