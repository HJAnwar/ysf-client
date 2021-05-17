import React from 'react';

const AllEducationCart = (props) => {
    const { imgUrl, description, subDescription, title } = props.AllEducations;

    console.log(imgUrl);
    return (
        <div className="col-md-12 mt-5">
            <div class="card" >
                <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"> {title} </h5>
                    <p class="card-text"> {subDescription} </p>
                    <p class="card-text"> {description} </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                        <button  onClick={() => props.HandleEducationUpdate(props.AllEducations._id)} class="btn btn-brand me-md-2" type="button">Update</button>
                        <button  onClick={() => props.HandleEducationDelete(props.AllEducations._id)} class="btn btn-brand" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllEducationCart;