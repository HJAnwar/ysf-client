import React from 'react';

const SocialDevelopmentCart = (props) => {
    const {imgUrl, description, subDescription, title} = props.socialDevelopment;

    return (
        <div>
            <div class="card">
            <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                <h1 class="card-title"> {title} </h1>
                    <h4 class="card-text"> {subDescription} </h4>
                   
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default SocialDevelopmentCart;