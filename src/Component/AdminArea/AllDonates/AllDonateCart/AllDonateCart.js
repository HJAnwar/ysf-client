import React from 'react';

const AllDonateCart = ({AllDonates}) => {
    console.log({AllDonates});
    return (
        <table className="table table-striped table-hover" >
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Amount</th>
                <th className="text-secondary" scope="col">Address</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  AllDonates.map((AllDonates, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{AllDonates.Name}</td>
                        <td>{AllDonates.Amount}TK</td>
                        <td>{AllDonates.Address}</td>
                        <td>{AllDonates.phone}</td>
                        <td>{AllDonates.Email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllDonateCart;