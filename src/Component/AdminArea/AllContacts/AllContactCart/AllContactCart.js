import React from 'react';

const AllContactCart = (props) => {
    const { email, subject, message, key } = props.AllContacts;

    return (
        <div className="col-md-6 mt-5">
            <div class="card" >
                
                <div class="card-body">
                    <h1 class="card-title" > {email} </h1>
                    <h3 class="card-title mt-3 mb-3"> {subject}</h3>
                    <p class="card-text"> {message} </p>
                        <button onClick={() => props.HandleContactDelete(props.AllContacts)} class="btn btn-brand" type="button">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllContactCart;