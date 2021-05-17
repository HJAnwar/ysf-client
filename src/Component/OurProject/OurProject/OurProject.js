import React, { useEffect, useState } from 'react';
import OurProjectCart from '../OurProjectCart/OurProjectCart';

import photo1 from '../../../img/work/work1.png';
import photo2 from '../../../img/work/work2.png';
import photo3 from '../../../img/work/work3.png';
import photo4 from '../../../img/work/work4.png';
import photo5 from '../../../img/work/work5.png';
import photo6 from '../../../img/work/work6.png';
import photo7 from '../../../img/work/work7.png';
import photo8 from '../../../img/work/work8.png';
import photo9 from '../../../img/work/work9.png';
import photo10 from '../../../img/work/work10.png';
import photo11 from '../../../img/work/work11.png';
import photo12 from '../../../img/work/work12.png';


import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Footer/Footer/Footer';

const OurProject = () => {
    const [allProject, setAllProject] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allWorkLoad')
        .then(res => res.json())
        .then(data => {
            setAllProject(data)
        })
    },[])

    // const allProject = [
    //     {
    //         name: "our young star foundation",
    //         photo: photo1,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo2,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo3,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo4,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo5,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo6,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo7,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     }, {
    //         name: "our young star foundation",
    //         photo: photo8,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo9,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    //     {
    //         name: "our young star foundation",
    //         photo: photo10,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },{
    //         name: "our young star foundation",
    //         photo: photo11,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },{
    //         name: "our young star foundation",
    //         photo: photo12,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
    //     },
    // ]
    return (
        <>
        <Navbar/>
        <div>
            
                <h1 className="text-center">All Work</h1>
        
            <div className="d-flex justify-content-center">
                <div className="row w-100" style={{ width: "90%", boxSizing: "border-box" }}>
                    {
                        allProject.map(ap => <OurProjectCart allProject={ap} />)
                    }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default OurProject;