import React, { useEffect, useState } from 'react';
import AllContactCart from '../AllContactCart/AllContactCart';


const AllContact = () => {

    const HandleContactUpdate = (data) => {
        console.log("update click", data);
    }

    const HandleContactDelete = (data) => {
        console.log("Delete click", data);
    }

    const [AllContacts, setAllContacts] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/allContacts';
        fetch(url)
        .then(res => res.json())
        .then(data => setAllContacts(data))
    },[])

    return (
        <div>
            <h2>all Content Here</h2>
            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        AllContacts.map(AC => <AllContactCart
                            AllContacts={AC}
                            Key={AC.Key}
                            HandleContactDelete={HandleContactDelete}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllContact;