import { Link } from "react-router-dom";

export const Fruit = ({
    _id,
    name,
    imageUrl,
    description,
    moreInfo,
    _createdOn
}) => {
    return (
        <div className="row layout_padding2">
                    <div className="col-md-8">
                        <div className="fruit_detail-box">
                            <h3>{name}</h3>
                            <p className="mt-4 mb-5">
                                {description}
                            </p>
                            <p className="mt-4 mb-5">
                                {moreInfo}
                            </p>
                            <div>
                                <Link to={`/catalog/${_id}/details`} className="custom_dark-btn">
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="fruit_img-box d-flex justify-content-center align-items-center">
                            <img
                                src={imageUrl}
                                alt=""
                                className=""
                                width="250px"
                            />
                        </div>
                    </div>
                </div>
    );
}



