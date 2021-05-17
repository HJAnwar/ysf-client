import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import EducationCart from './EducationCart/EducationCart';

const Education = () => {
    const [education, setEducation] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allEducation')
        .then(res => res.json())
        .then(data => setEducation(data))
    },[])
    
    return (
        <>
        <Navbar/>
        <div>
            <h1>Education</h1>
            <div className="d-flex justify-content-center container">
                <div className="row">
                    {
                        education.map(edu => <EducationCart education={edu} />)
                    }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Education;