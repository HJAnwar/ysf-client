import React from 'react';

const OurTeamCart = (props) => {
    const { imgUrl, description, position, name} = props.OurTeams;
    return (
        <div className="col-md-12 mt-5">
            <div class="card imageStyle" >
            <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                <h3 class="card-title"> <b>{name}</b> </h3>
                    <h6 class="card-text"> {position} </h6>
                    <h6 class="card-text"> {description} </h6>
                </div>
            </div>
        </div>
    );
};

export default OurTeamCart;