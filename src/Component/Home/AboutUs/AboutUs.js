import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="mt-5 text-center borderArea">
            <h1 className="text-center">WHO WE ARE</h1>
            <p className="text-center">We act as a catalyst, creating opportunities for people living in poverty to realise their potential. <br />
                Join the world’s biggest family. <br />
                Small is beautiful, scale is necessary.
            </p>
            <button className="LearnMoreBtn" > <Link className="LearnMoreBtnLink" to="/whoweare">Learn mare...</Link> </button>

            <div className="d-flex justify-content-center mt-5">
                <Link className="LinkStyle" to='/ourTeam' >Our Team</Link>
                <Link className="LinkStyle" to='/whoweare' >Mission</Link>
                <Link className="LinkStyle" to='/donate' >Donate</Link>

            </div>

            <hr className=" mt-5 hrStyle" />
        </div>
    );
};

export default AboutUs;