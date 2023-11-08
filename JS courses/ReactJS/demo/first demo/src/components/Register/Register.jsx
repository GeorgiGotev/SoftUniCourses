export default function Register(props) {
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">Register</h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form action="">
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Repeat-password"
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <button type="submit">send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
