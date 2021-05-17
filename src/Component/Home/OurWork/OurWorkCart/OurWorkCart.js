import React from 'react';

const OurWorkCart = (props) => {
    const { photo, name, description } = props.OurWork;
    return (

        <div className="col-md-6 mt-5">
            <div class=" card ">
                <img src={photo} style={{ height: '280px' }} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#" class="LearnMoreBtntwo">Go somewhere</a>
                </div>
            </div>
        </div>


    );
};

export default OurWorkCart;