import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../../img/work/work1.png';
import photo2 from '../../../img/work/work2.png';
import photo11 from '../../../img/work/work11.png';
import photo4 from '../../../img/work/work10.png';
import photo6 from '../../../img/work/work6.png';
import photo8 from '../../../img/work/work8.png';

import OurWorkCart from './OurWorkCart/OurWorkCart';


const OurWork = () => {
    const OurWorks = [
        {
            name: "our young star foundation",
            photo: photo1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
        },
        {
            name: "our young star foundation",
            photo: photo2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
        },
        {
            name: "our young star foundation",
            photo: photo11,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
        },
        {
            name: "our young star foundation",
            photo: photo4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
        },
        {
            name: "our young star foundation",
            photo: photo6,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
        },
        {
            name: "our young star foundation",
            photo: photo8,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, pariatur ratione! Esse commodi aliquid beatae ratione, quae ab cumque alias?"
        },
        
    ]

    return (
        <>
       
        <div className="borderArea">
            <h1 className="text-center">OUR WORK</h1>
            <div className="d-flex justify-content-center">
                <div className="row " style={{width:"90%", boxSizing:"border-box" }}>
                    {
                        OurWorks.map(ow => <OurWorkCart OurWork={ow} />)
                    }
                </div>
            </div>
            <div className=" text-center mt-5 mb-5">
            <button className=" LearnMoreBtn " ><Link className="LearnMoreBtnLink" to="/ourProject">Learn mare...</Link></button>

            </div>
            <hr className='mt-5 hrStyle' />
        </div>

        </>
    );
};

export default OurWork;