import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import JoinUs from '../JoinUs/JoinUs';
import OurProject from '../OurProject/OurProject';
import OurWork from '../OurWork/OurWork';

const Home = () => {
    return (
        <div>
           
            <Header />
            <br />
            <AboutUs />
            <br />
            <OurProject />
            <br />
            <OurWork />
            <br/>
            <JoinUs/>
            <br/>
            <Carousel/>
            <br/>
            <Footer />

        </div>
    );
};

export default Home;