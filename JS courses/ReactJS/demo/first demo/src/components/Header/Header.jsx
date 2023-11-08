export default function Header(props) {
    return (
        <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            
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
