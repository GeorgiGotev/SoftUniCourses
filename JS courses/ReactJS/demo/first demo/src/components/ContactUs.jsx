export default function ContactUs(props) {
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">Contact Us</h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form action="">
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <input
                                            type="text"
                                            placeholder="Message"
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
