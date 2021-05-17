import React from 'react';

const AllWhoWeAreCart = (props) => {

    const { title, subtitle, description, key } = props.AllWhoWeAres;

    return (
        <div className="col-md-12 mt-5">
            <div class="card" >
                
                <div class="card-body">
                    <h1 class="card-title" > {title} </h1>
                    <h3 class="card-title mt-3 mb-3"> {subtitle}</h3>
                    <p class="card-text"> {description} </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                        <button onClick={() => props.HandleWhoWeAreUpdate(props.AllWhoWeAres._id)} class="btn btn-brand me-md-2" type="button">Update</button>
                        <button onClick={() => props.HandleWhoWeAreDelete(props.AllWhoWeAres._id)} class="btn btn-brand" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllWhoWeAreCart;