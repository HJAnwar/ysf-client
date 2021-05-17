import React from 'react';
import './OurProject.css';
import photo1 from '../../../img/poorhelp (1).png';
import photo2 from '../../../img/poorhelp (2).png';
import photo3 from '../../../img/poorhelp (3).png';

import OurProjectCart from './OurProjectCart/OurProjectCart';

const OurProject = () => {

    const ourProject = [
        { photo: photo3 },
        { photo: photo1 },
        { photo: photo2 },
        

    ]

    return (
        <div className="mt-5 borderArea">
            <h1 className="text-center mt-5">OUR PROJECT</h1>
            <div className=" d-flex justify-content-center">
                <div className="row  mb-5" style={{width:"90%", boxSizing:"border-box" }}>
                    {
                        ourProject.map(ph => <OurProjectCart photo={ph} />)
                    }
                </div>
            </div>
            <hr  className=" mt-5 hrStyle" />
        </div>
    );
};

export default OurProject;