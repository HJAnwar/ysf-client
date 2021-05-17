import React from 'react';

const OurProjectCart = (props) => {
    const {imgUrl, description, subDescription, title} = props.allProject;
    return (
        <div className="col-md-6 ">
            <div class="card mt-5">
            <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title"> {title} </h5>
                    <p class="card-text"> {subDescription} </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default OurProjectCart;