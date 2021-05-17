import React from 'react';

const AllAdminCart = ({AllAdmins,HandleAdminDelete }) => {
    return (
        <div>
            <table className="table table-striped table-hover" >
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Delete</th>

                </tr>
            </thead>
            <tbody >
                {
                  AllAdmins.map((AllAdmins, index) => 
                        
                    <tr className=" m-2 ">
                        <td>{index + 1}</td>
                        <td>{AllAdmins.name}</td>
                        <td>{AllAdmins.age}</td>
                        <td>{AllAdmins.phone}</td>
                        <td>{AllAdmins.email}</td>
                        <button className='btn btn-primary text-dark' onClick={() => HandleAdminDelete(AllAdmins._id)}>Delete</button>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default AllAdminCart;