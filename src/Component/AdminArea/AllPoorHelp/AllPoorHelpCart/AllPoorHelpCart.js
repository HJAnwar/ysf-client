import React from 'react';

const AllPoorHelpCart = (props) => {
    const { imgUrl, description, subDescription, title } = props.AllPoorHelps;

    console.log(imgUrl);
    return (
        <div className="col-md-12 mt-5">
            <div class="card" >
                <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h1 class="card-title"> {title} </h1>
                    <h4 class="card-text"> {subDescription} </h4>
                    <p class="card-text"> {description} </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                        <button  onClick={() => props.HandlePoorHelpsUpdate(props.AllPoorHelps._id)} class="btn btn-brand me-md-2" type="button">Update</button>
                        <button  onClick={() => props.HandlePoorHelpsDelete(props.AllPoorHelps._id)} class="btn btn-brand" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPoorHelpCart;