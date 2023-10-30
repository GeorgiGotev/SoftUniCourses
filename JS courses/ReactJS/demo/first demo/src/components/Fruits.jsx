export default function Fruits (props){
    return(
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
    )
}