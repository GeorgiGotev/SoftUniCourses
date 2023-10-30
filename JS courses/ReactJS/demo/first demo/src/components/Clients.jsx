export default function Clients(props) {
    return (
        <section className="client_section layout_padding">
            <div className="container">
                <h2 className="custom_heading">Testimonial</h2>
                <p className="custom_heading-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have
                </p>
                <div>
                    <div
                        id="carouselExampleControls-2"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="client_container layout_padding2">
                                    <div className="client_img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="client_detail">
                                        <h3>Johnhex</h3>
                                        <p className="custom_heading-text">
                                            There are many variations of
                                            passages of Lorem Ipsum available,
                                            but the majority have suffered
                                            alteration in some form, by injected
                                            humour, or randomised words which
                                            don't look even slightly believable.
                                            If you are <br />
                                            going to use a passage of Lorem
                                            Ipsum, you need to be sure
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="client_container layout_padding2">
                                    <div className="client_img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="client_detail">
                                        <h3>Johnhex</h3>
                                        <p className="custom_heading-text">
                                            There are many variations of
                                            passages of Lorem Ipsum available,
                                            but the majority have suffered
                                            alteration in some form, by injected
                                            humour, or randomised words which
                                            don't look even slightly believable.
                                            If you are <br />
                                            going to use a passage of Lorem
                                            Ipsum, you need to be sure
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="client_container layout_padding2">
                                    <div className="client_img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="client_detail">
                                        <h3>Johnhex</h3>
                                        <p className="custom_heading-text">
                                            There are many variations of
                                            passages of Lorem Ipsum available,
                                            but the majority have suffered
                                            alteration in some form, by injected
                                            humour, or randomised words which
                                            don't look even slightly believable.
                                            If you are <br />
                                            going to use a passage of Lorem
                                            Ipsum, you need to be sure
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom_carousel-control">
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleControls-2"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleControls-2"
                                role="button"
                                data-slide="next"
                            >
                                <span className="" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
