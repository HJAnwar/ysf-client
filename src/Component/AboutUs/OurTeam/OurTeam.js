import React, { useEffect, useState } from 'react';
import OurTeamCart from './OurTeamCart/OurTeamCart';
import imgs from '../../../img/169181792_10157859844702751_3970006714961933626_n.jpg'
import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Footer/Footer/Footer';

const OurTeam = () => {

    const [OurTeams, setOurTeam] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/allTeam')
        .then(res => res.json())
        .then(data => setOurTeam(data))
    },[])
    

    return (
        <>
        <Navbar/>
        <div>
            <h1 className="text-center">Team Member</h1>

            <div className="d-flex justify-content-center container">
                <div className="row w-100">
                    {
                        OurTeams.map(tm => <OurTeamCart OurTeams={tm}/>)
                    }
                </div>
            </div>

        </div>
        <Footer/>
        </>
    );
};

export default OurTeam;