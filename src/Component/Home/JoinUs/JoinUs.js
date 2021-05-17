import React, { useEffect, useState } from 'react';
import JoinUsCart from './JoinUsCart/JoinUsCart';
import { faDonate, faGlobe, faHandHolding, faHandsHelping, faUsers } from '@fortawesome/free-solid-svg-icons';


const JoinUs = () => {

    const [active, setActive] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/allActiveMember')
        .then(res => res.json())
        .then(data => {
            setActive(data)
        })
    }, [])

    const activeMem = active.length;

    console.log(activeMem);

    const JoinUs = [
        {
            title: "Active Member",
            icon: faUsers,
            quantity: activeMem,
            link: "ourTeam"
        },
        {
            title: "Branch",
            icon: faGlobe,
            quantity: 1,
           
        },
        {
            title: "Donate",
            icon: faDonate,
            quantity: 12,
            link: "donate"

        },
        {
            title: "Help ",
            icon: faHandsHelping,
            quantity: 12,
            link: "donate"
        },
    ]

    return (
        <div>
            <h1 className="text-center textColor" >JOIN US</h1>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        JoinUs.map(ju => <JoinUsCart joinUs={ju} />)
                    }
                </div>
           </div>
        </div>
    );
};

export default JoinUs;