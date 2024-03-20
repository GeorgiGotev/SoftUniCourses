import Navigation from "./components/navigation/Navigation";

function App() {
  

    return (
        <>
            <Navigation />
            {/* header */}
            <header id="home" className="header">
                <div className="overlay text-white text-center">
                    <h1 className="display-2 font-weight-bold my-3">
                        Food Hut
                    </h1>
                    <h2 className="display-4 mb-5">
                        Always fresh &amp; Delightful
                    </h2>
                    <a className="btn btn-lg btn-primary" href="#gallary">
                        View Our gallary
                    </a>
                </div>
            </header>
            {/*  About Section  */}
            <div
                id="about"
                className="container-fluid wow fadeIn"
                data-wow-duration="1.5s"
            >
                <div className="row">
                    <div className="col-lg-6 has-img-bg" />
                    <div className="col-lg-6">
                        <div className="row justify-content-center">
                            <div className="col-sm-8 py-5 my-5">
                                <h2 className="mb-4">About Us</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Consectetur, quisquam
                                    accusantium nostrum modi, nemo, officia
                                    veritatis ipsum facere maxime assumenda
                                    voluptatum enim! Labore maiores placeat
                                    impedit, vero sed est voluptas!Lorem ipsum
                                    dolor sit amet, consectetur adipisicing
                                    elit. Expedita alias dicta autem, maiores
                                    doloremque quo perferendis, ut obcaecati
                                    harum, <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eum necessitatibus iste,
                                    nulla recusandae porro minus nemo eaque cum
                                    repudiandae quidem voluptate magnam
                                    voluptatum? <br />
                                    Nobis, saepe sapiente omnis qui eligendi
                                    pariatur. quis voluptas. Assumenda facere
                                    adipisci quaerat. Illum doloremque quae
                                    omnis vitae.
                                </p>
                                <p>
                                    <b>
                                        Lonsectetur adipisicing elit. Blanditiis
                                        aspernatur, ratione dolore vero
                                        asperiores explicabo.
                                    </b>
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eos ab itaque modi,
                                    reprehenderit fugit soluta, molestias optio
                                    repellat incidunt iure sed deserunt nemo
                                    magnam rem explicabo vitae. Cum, nostrum,
                                    quidem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  gallary Section  */}
            <div
                id="gallary"
                className="text-center bg-dark text-light has-height-md middle-items wow fadeIn"
            >
                <h2 className="section-title">OUR MENU</h2>
            </div>
            <div className="gallary row">
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-1.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-2.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-3.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-4.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-5.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-6.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-7.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-8.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-9.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-10.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-11.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src="./imgs/gallary-12.jpg"
                        alt="template by DevCRID http://www.devcrud.com/"
                        className="gallary-img"
                    />
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon ti-plus" />
                    </a>
                </div>
            </div>
            {/* book a table Section  */}
            <div
                className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items"
                id="book-table"
            >
                <div className="">
                    <h2 className="section-title mb-5">BOOK A TABLE</h2>
                    <div className="row mb-5">
                        <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                            <input
                                type="email"
                                id="booktable"
                                className="form-control form-control-lg custom-form-control"
                                placeholder="EMAIL"
                            />
                        </div>
                        <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                            <input
                                type="number"
                                id="booktable"
                                className="form-control form-control-lg custom-form-control"
                                placeholder="NUMBER OF GUESTS"
                                max={20}
                                min={0}
                            />
                        </div>
                        <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                            <input
                                type="time"
                                id="booktable"
                                className="form-control form-control-lg custom-form-control"
                                placeholder="EMAIL"
                            />
                        </div>
                        <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                            <input
                                type="date"
                                id="booktable"
                                className="form-control form-control-lg custom-form-control"
                                placeholder="12/12/12"
                            />
                        </div>
                    </div>
                    <a
                        href="#"
                        className="btn btn-lg btn-primary"
                        id="rounded-btn"
                    >
                        FIND TABLE
                    </a>
                </div>
            </div>
            {/* BLOG Section  */}
            <div
                id="blog"
                className="container-fluid bg-dark text-light py-5 text-center wow fadeIn"
            >
                <h2 className="section-title py-5">EVENTS AT THE FOOD HUT</h2>
                <div className="row justify-content-center">
                    <div className="col-sm-7 col-md-4 mb-5">
                        <ul
                            className="nav nav-pills nav-justified mb-3"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-toggle="pill"
                                    href="#foods"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    Foods
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    href="#juices"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    Juices
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="foods"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img
                                        src="./imgs/blog-1.jpg"
                                        alt="template by DevCRID http://www.devcrud.com/"
                                        className="rounded-0 card-img-top mg-responsive"
                                    />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4">
                                            <a
                                                href="#"
                                                className="badge badge-primary"
                                            >
                                                $5
                                            </a>
                                        </h1>
                                        <h4 className="pt20 pb20">
                                            Reiciendis Laborum{' '}
                                        </h4>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Culpa
                                            provident illum officiis fugit
                                            laudantium voluptatem sit iste
                                            delectus qui ex.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img
                                        src="./imgs/blog-2.jpg"
                                        alt="template by DevCRID http://www.devcrud.com/"
                                        className="rounded-0 card-img-top mg-responsive"
                                    />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4">
                                            <a
                                                href="#"
                                                className="badge badge-primary"
                                            >
                                                $12
                                            </a>
                                        </h1>
                                        <h4 className="pt20 pb20">
                                            Adipisci Totam
                                        </h4>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Culpa
                                            provident illum officiis fugit
                                            laudantium voluptatem sit iste
                                            delectus qui ex.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img
                                        src="./imgs/blog-3.jpg"
                                        alt="template by DevCRID http://www.devcrud.com/"
                                        className="rounded-0 card-img-top mg-responsive"
                                    />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4">
                                            <a
                                                href="#"
                                                className="badge badge-primary"
                                            >
                                                $8
                                            </a>
                                        </h1>
                                        <h4 className="pt20 pb20">
                                            Dicta Deserunt
                                        </h4>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Culpa
                                            provident illum officiis fugit
                                            laudantium voluptatem sit iste
                                            delectus qui ex.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="juices"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <div className="row">
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card bg-transparent border">
                                    <img
                                        src="./imgs/blog-4.jpg"
                                        alt="template by DevCRID http://www.devcrud.com/"
                                        className="rounded-0 card-img-top mg-responsive"
                                    />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4">
                                            <a
                                                href="#"
                                                className="badge badge-primary"
                                            >
                                                $15
                                            </a>
                                        </h1>
                                        <h4 className="pt20 pb20">
                                            Consectetur Adipisicing Elit
                                        </h4>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Culpa
                                            provident illum officiis fugit
                                            laudantium voluptatem sit iste
                                            delectus qui ex.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card bg-transparent border">
                                    <img
                                        src="./imgs/blog-5.jpg"
                                        alt="template by DevCRID http://www.devcrud.com/"
                                        className="rounded-0 card-img-top mg-responsive"
                                    />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4">
                                            <a
                                                href="#"
                                                className="badge badge-primary"
                                            >
                                                $29
                                            </a>
                                        </h1>
                                        <h4 className="pt20 pb20">
                                            Ullam Laboriosam
                                        </h4>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Culpa
                                            provident illum officiis fugit
                                            laudantium voluptatem sit iste
                                            delectus qui ex.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card bg-transparent border">
                                    <img
                                        src="./imgs/blog-6.jpg"
                                        alt="template by DevCRID http://www.devcrud.com/"
                                        className="rounded-0 card-img-top mg-responsive"
                                    />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4">
                                            <a
                                                href="#"
                                                className="badge badge-primary"
                                            >
                                                $3
                                            </a>
                                        </h1>
                                        <h4 className="pt20 pb20">
                                            Fugit Ipsam
                                        </h4>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Culpa
                                            provident illum officiis fugit
                                            laudantium voluptatem sit iste
                                            delectus qui ex.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* REVIEWS Section  */}
            <div
                id="testmonial"
                className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items"
            >
                <h2 className="section-title my-5 text-center">REVIEWS</h2>
                <div className="row mt-3 mb-5">
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">John Doe</h3>
                            <h6 className="testmonial-subtitle">
                                Web Designer
                            </h6>
                            <div className="testmonial-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Earum nobis eligendi,
                                    quaerat accusamus ipsum sequi dignissimos
                                    consequuntur blanditiis natus. Aperiam!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">Steve Thomas</h3>
                            <h6 className="testmonial-subtitle">
                                UX/UI Designer
                            </h6>
                            <div className="testmonial-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Laborum minus obcaecati
                                    cum eligendi perferendis magni dolorum ipsum
                                    magnam, sunt reiciendis natus. Aperiam!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">Miranda Joy</h3>
                            <h6 className="testmonial-subtitle">
                                Graphic Designer
                            </h6>
                            <div className="testmonial-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aliquid, nam. Earum nobis
                                    eligendi, dignissimos consequuntur
                                    blanditiis natus. Aperiam!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTACT Section  */}
            {/* <div
    id="contact"
    className="container-fluid bg-dark text-light border-top wow fadeIn"
  >
    <div className="row">
      <div className="col-md-6 px-0">
        <div
          id="map"
          style={{ width: "100%", height: "100%", minHeight: 400 }}
        />
      </div>
      <div className="col-md-6 px-5 has-height-lg middle-items">
        <h3>FIND US</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          laboriosam doloremque odio delectus, sunt magnam laborum impedit
          molestiae, magni quae ipsum, ullam eos! Alias suscipit impedit et,
          adipisci illo quam.
        </p>
        <div className="text-muted">
          <p>
            <span className="ti-location-pin pr-3" /> 12345 Fake ST NoWhere, AB
            Country
          </p>
          <p>
            <span className="ti-support pr-3" /> (123) 456-7890
          </p>
          <p>
            <span className="ti-email pr-3" />
            info@website.com
          </p>
        </div>
      </div>
    </div>
  </div> */}
            {/* page footer  */}
            <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>EMAIL US</h3>
                        <p className="text-muted">info@website.com</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>CALL US</h3>
                        <p className="text-muted">(123) 456-7890</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>FIND US</h3>
                        <p className="text-muted">
                            12345 Fake ST NoWhere AB Country
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-light text-center border-top wow fadeIn">
                <p className="mb-0 py-3 text-muted small">
                    © Copyright Made with <i className="ti-heart text-danger" />{' '}
                    By <a href="http://devcrud.com">DevCRUD</a>
                </p>
            </div>
        </>
    );
}

export default App;
