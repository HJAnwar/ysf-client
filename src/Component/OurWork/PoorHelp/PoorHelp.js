import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import PoorHelpCart from './PoorHelpCart/PoorHelpCart';

const PoorHelp = () => {

    const [poorHelp, setPoorHelp] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allPoorHelp')
        .then(res => res.json())
        .then(data => {
            setPoorHelp(data)
        })
    },[])

    return (
        <div>
            <Navbar/>
            <div>
            
                    <h1 className="text-center">All Helps</h1>
            
                <div className="d-flex justify-content-center container">
                    <div className="row w-100">
                        {
                            poorHelp.map(ap => <PoorHelpCart allProject={ap} />)
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PoorHelp;