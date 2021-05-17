import React from 'react';

const PoorHelpCart = (props) => {
    const {imgUrl, description, subDescription, title} = props.allProject;
    return (
        <div className="col-md-12 ">
            <div class="card mt-5">
            <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                <h1 class="card-title"> {title} </h1>
                    <h3 class="card-text"> {subDescription} </h3>
                    <p class="card-text"> {description} </p>

                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default PoorHelpCart;