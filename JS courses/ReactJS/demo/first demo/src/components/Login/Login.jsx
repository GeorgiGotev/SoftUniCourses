import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export default function Login () {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: '',
            password: '',
        },
        onLoginSubmit
    );

    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">Login</h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form action="POST" onSubmit={onSubmit}>
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name='email'
                                            value={values.email}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name='password'
                                            value={values.password}
                                            onChange={changeHandler}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <button type="submit">send</button>
                                    </div>
                                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
