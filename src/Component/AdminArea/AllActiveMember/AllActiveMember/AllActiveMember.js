import React, { useEffect, useState } from 'react';
import AllActiveMemberCart from '../AllActiveMemberCart/AllActiveMemberCart';

const AllActiveMember = () => {

    const [activeMem, setActiveMem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allActiveMember')
        .then(res => res.json())
        .then(data => {
            setActiveMem(data)
        })
    }, [])

    return (
        <div>
            <AllActiveMemberCart  AllActiveMember={activeMem} />
        </div>
    );
};

export default AllActiveMember;