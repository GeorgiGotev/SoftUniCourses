import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
  {/* service section */}
  <section className="service_section layout_padding ">
    <div className="container">
      <h2 className="custom_heading">Our Services</h2>
      <p className="custom_heading-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>
      <div className=" layout_padding2">
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src="images/card-item-1.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Orange</h5>
              <p className="card-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="images/card-item-2.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Grapes</h5>
              <p className="card-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="images/card-item-3.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Gauva</h5>
              <p className="card-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a href="" className="custom_dark-btn">
          Read More
        </a>
      </div>
    </div>
  </section>
  {/* end service section */}
  {/* fruits section */}
  <section className="fruit_section">
    <div className="container">
      <h2 className="custom_heading">Fresh Fruits</h2>
      <p className="custom_heading-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>
      <div className="row layout_padding2">
        <div className="col-md-8">
          <div className="fruit_detail-box">
            <h3>Best Fresh Orange</h3>
            <p className="mt-4 mb-5">
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be
            </p>
            <div>
              <a href="" className="custom_dark-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="fruit_img-box d-flex justify-content-center align-items-center">
            <img src="images/orange.png" alt="" className="" width="250px" />
          </div>
        </div>
      </div>
      <div className="row layout_padding2">
        <div className="col-md-8">
          <div className="fruit_detail-box">
            <h3>Best Fresh Grapes</h3>
            <p className="mt-4 mb-5">
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be
            </p>
            <div>
              <a href="" className="custom_dark-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="fruit_img-box d-flex justify-content-center ">
            <img src="images/grapes.png" alt="" className="" width="100px" />
          </div>
        </div>
      </div>
      <div className="row layout_padding2-top layout_padding-bottom">
        <div className="col-md-8">
          <div className="fruit_detail-box">
            <h3>Best Fresh Gauva</h3>
            <p className="mt-4 mb-5">
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be
            </p>
            <div>
              <a href="" className="custom_dark-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="fruit_img-box d-flex justify-content-center align-items-center">
            <img src="images/gauva.png" alt="" className="" width="250px" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end fruits section */}
  {/* tasty section */}
  <section className="tasty_section">
    <div className="container_fluid">
      <h2>Very tasty fruits</h2>
    </div>
  </section>
  {/* end tasty section */}
  {/* client section */}
  <section className="client_section layout_padding">
    <div className="container">
      <h2 className="custom_heading">Testimonial</h2>
      <p className="custom_heading-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
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
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are <br />
                    going to use a passage of Lorem Ipsum, you need to be sure
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
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are <br />
                    going to use a passage of Lorem Ipsum, you need to be sure
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
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are <br />
                    going to use a passage of Lorem Ipsum, you need to be sure
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
  {/* end client section */}
  {/* contact section */}
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
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="mt-5">
                  <input type="text" placeholder="Message" />
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
  {/* end contact section */}
  {/* map section */}
  <section className="map_section">
    <div id="map" className="h-100 w-100 "></div>
  </section>
  {/* end map section */}
  <section className="info_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5>Fruits</h5>
          <ul>
            <li>randomised</li>
            <li>words which</li>
            <li>don't look even</li>
            <li>slightly</li>
            <li>believable. If you</li>
            <li>are going to use</li>
            <li>a passage of</li>
            <li>Lorem Ipsum,</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Services</h5>
          <ul>
            <li>randomised</li>
            <li>words which</li>
            <li>don't look even</li>
            <li>slightly</li>
            <li>believable. If you</li>
            <li>are going to use</li>
            <li>a passage of</li>
            <li>Lorem Ipsum,</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>List</h5>
          <ul>
            <li>randomised</li>
            <li>words which</li>
            <li>don't look even</li>
            <li>slightly</li>
            <li>believable. If you</li>
            <li>are going to use</li>
            <li>a passage of</li>
            <li>Lorem Ipsum,</li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="social_container">
            <h5>Follow Us</h5>
            <div className="social-box">
              <a href="">
                <img src="images/fb.png" alt="" />
              </a>
              <a href="">
                <img src="images/twitter.png" alt="" />
              </a>
              <a href="">
                <img src="images/linkedin.png" alt="" />
              </a>
              <a href="">
                <img src="images/instagram.png" alt="" />
              </a>
            </div>
          </div>
          <div className="subscribe_container">
            <h5>Subscribe Now</h5>
            <div className="form_container">
              <form action="">
                <input type="email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <Footer/>
  
</>

  )
}

export default App
