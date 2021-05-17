import React from 'react';
import imgs from '../../../img/headerimg1.png';
const HeaderMain = () => {
    return (
        <div className="div">
            <main className="row d-flex align-items-center w-100">
                <div className="col-md-4 offset-md-1">
                    <h1 class="text-white" style={{ color: '#3A4256' }}>YOUNG STAR <br /> FOUNDATION</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                   <a href="/donate"> <button className="btn btn-primary">GET DONATE</button></a>
                </div>
                <div className="col-md-6">
                    <img style={{height:'500px', width:'100%'}} src={imgs} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;