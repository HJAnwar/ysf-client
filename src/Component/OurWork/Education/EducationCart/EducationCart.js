import React from 'react';

const EducationCart = (props) => {
    const { imgUrl, description, subDescription, title } = props.education;


    return (
        <div className="col-md-12 mt-5">
            <div class="card" >
                <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"> {title} </h5>
                    <p class="card-text"> {subDescription} </p>
                    <p class="card-text"> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default EducationCart;