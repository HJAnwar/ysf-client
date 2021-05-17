import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import SocialDevelopmentCart from './SocialDevelopmentCart/SocialDevelopmentCart';

const SocialDevelopment = () => {
    const [SocialDevelopment, setSocialDevelopment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allSocialDevelopment')
        .then(res => res.json())
        .then(data => setSocialDevelopment(data))
    },[])
    
    return (
        <>
        <Navbar/>
        <div>
            <h1 className="text-center">Our  Social Development Project</h1>
            <div className="d-flex justify-content-center container mt-5">
                <div className="row w-100">
                    {
                        SocialDevelopment.map(SD => <SocialDevelopmentCart socialDevelopment={SD}/> )
                    }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default SocialDevelopment;