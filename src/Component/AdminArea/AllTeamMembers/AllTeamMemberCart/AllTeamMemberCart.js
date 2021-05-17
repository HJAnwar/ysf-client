import React from 'react';
import './AllTeamMemberCart.css';

const AllTeamMemberCart = (props) => {
    const { imgUrl, description, position, name} = props.AllTeamMember;

    return (
        <div className="col-md-12 mt-5">
            <div class="card imageStyle" >
            <img src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                <h3 class="card-title"> <b>{name}</b> </h3>
                    <h6 class="card-text"> {position} </h6>
                    <h6 class="card-text"> {description} </h6>
                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                        <button onClick={() => props.HandleTeamMemberUpdate(props.AllTeamMember._id)} class="btn btn-brand me-md-2" type="button">Update</button>
                        <button onClick={() => props.HandleTeamMemberDelete(props.AllTeamMember._id)} class="btn btn-brand" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTeamMemberCart;