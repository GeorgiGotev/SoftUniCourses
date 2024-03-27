import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="home" className="header">
            <div className="overlay text-white text-center">
                <h1 className="display-2 font-weight-bold my-3">Food Hut</h1>
                <h2 className="display-4 mb-5">
                    Always fresh &amp; Delightful
                </h2>
                <Link className="btn btn-lg btn-primary" to="/recipes">
                    View Our recipes
                </Link>
            </div>
        </header>
    );
}
