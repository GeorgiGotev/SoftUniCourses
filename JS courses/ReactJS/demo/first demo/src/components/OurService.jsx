export default function OurService(props){
    return (
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
    )
}