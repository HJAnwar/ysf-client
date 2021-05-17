import React from 'react';

const AllActiveMemberCart = ({AllActiveMember}) => {

    return (
        <div>
        <table className="table table-striped table-hover" >
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">Address</th>
            <th className="text-secondary" scope="col">Father</th>
            <th className="text-secondary" scope="col">Education</th>
            <th className="text-secondary" scope="col">School</th>
            <th className="text-secondary" scope="col">Facebook</th>
            <th className="text-secondary" scope="col">Village</th>
            <th className="text-secondary" scope="col">DateOfBirth</th>
            <th className="text-secondary" scope="col">FatherOccupation</th>
            <th className="text-secondary" scope="col">Aim</th>
            <th className="text-secondary" scope="col">Gender</th>
            <th className="text-secondary" scope="col">Monthly</th>

            </tr>
        </thead>
        <tbody >
            {
              AllActiveMember.map((AllActiveMember, index) => 
                    
                <tr className=" m-2 ">
                    <td>{index + 1}</td>
                    <td>{AllActiveMember.Name}</td>
                    <td>{AllActiveMember.Phone}</td>
                    <td>{AllActiveMember.Email}</td>
                    <td>{AllActiveMember.Address}</td>
                    <td>{AllActiveMember.Father}</td>
                    <td>{AllActiveMember.Education}</td>
                    <td>{AllActiveMember.School}</td>
                    <td>{AllActiveMember.Facebook}</td>
                    <td>{AllActiveMember.Village}</td>
                    <td>{AllActiveMember.DateOfBirth}</td>
                    <td>{AllActiveMember.FatherOccupation}</td>
                    <td>{AllActiveMember.Aim}</td>
                    <td>{AllActiveMember.Gender}</td>
                    <td>{AllActiveMember.Monthly}Tk</td>
                    <button className='btn btn-primary text-dark'>Delete</button>
                </tr>
                )
            }
        </tbody>
    </table>
    </div>
    );
};

export default AllActiveMemberCart;