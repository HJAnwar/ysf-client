import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';

const WhoWeAre = () => {

    const [mission, setMission] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allWhoWeAreLoad')
        .then(res => res.json())
        .then(data => {
            setMission(data)
        })
    },[])

    return (
        <>
        <Navbar/>
        <div>
            <h3 className="text-center">We act as a catalyst, creating opportunities for people living in poverty to realise their potential. <br />
                Join the world’s biggest family. <br />
                Small is beautiful, scale is necessary.
            </h3>
        </div>
        </>
    );
};

export default WhoWeAre;