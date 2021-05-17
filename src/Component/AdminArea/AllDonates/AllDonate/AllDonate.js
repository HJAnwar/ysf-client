import React, { useState, useEffect } from 'react';
import AllDonateCart from '../AllDonateCart/AllDonateCart';

const AllDonate = () => {

    const [AllDonates, setAllDonates] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allDonates')
            .then(res => res.json())
            .then(data => {
                setAllDonates(data)
            })
    }, [])
    console.log(AllDonates);
    return (
        <div>
            <h5 className="text-brand">All Donate</h5>
            <AllDonateCart
                Key={AllDonates._id}
                AllDonates={AllDonates} />
        </div>
    );
};

export default AllDonate;