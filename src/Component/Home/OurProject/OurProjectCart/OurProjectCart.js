import React from 'react';

const OurProjectCart = (props) => {
    const { photo } = props.photo;
    return (
        <div className="col-lg-4 col-md-6 mt-5">
            <div>
                <img className="" src={photo} alt="" />
            </div>
        </div>
    );
};

export default OurProjectCart;