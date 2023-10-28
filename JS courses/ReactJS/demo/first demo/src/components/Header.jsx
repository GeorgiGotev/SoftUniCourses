export default function Header(props) {
    return (
        <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
                <span>Tropiko</span>
              </a>
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
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="fruit.html">
                        {" "}
                        Fruits
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html">
                        {" "}
                        Services{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact us
                      </a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    />
                  </form>
                </div>
                <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                  <a href="">Get A quote</a>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className=" slider_section position-relative">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="slider_item-detail">
                            <div>
                              <h1>
                                Welcome to <br />
                                Our Fruits Shop
                              </h1>
                              <p>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration
                                in some form, by injected humour, or randomised
                                words which don't look even slightly believable.
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="text-uppercase custom_orange-btn mr-3"
                                >
                                  Shop Now
                                </a>
                                <a
                                  href=""
                                  className="text-uppercase custom_dark-btn"
                                >
                                  Contact Us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="slider_img-box">
                            <div>
                              <img src="images/slide-img.png" alt="" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="slider_item-detail">
                            <div>
                              <h1>
                                Welcome to <br />
                                Our Fruits Shop
                              </h1>
                              <p>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration
                                in some form, by injected humour, or randomised
                                words which don't look even slightly believable.
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="text-uppercase custom_orange-btn mr-3"
                                >
                                  Shop Now
                                </a>
                                <a
                                  href=""
                                  className="text-uppercase custom_dark-btn"
                                >
                                  Contact Us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="slider_img-box">
                            <div>
                              <img src="images/slide-img.png" alt="" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="slider_item-detail">
                            <div>
                              <h1>
                                Welcome to <br />
                                Our Fruits Shop
                              </h1>
                              <p>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration
                                in some form, by injected humour, or randomised
                                words which don't look even slightly believable.
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="text-uppercase custom_orange-btn mr-3"
                                >
                                  Shop Now
                                </a>
                                <a
                                  href=""
                                  className="text-uppercase custom_dark-btn"
                                >
                                  Contact Us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="slider_img-box">
                            <div>
                              <img src="images/slide-img.png" alt="" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom_carousel-control">
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    );
}
