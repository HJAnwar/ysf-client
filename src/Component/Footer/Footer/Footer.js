import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const AboutUs = [
        {name: "Our history" , link: "/history"},
        {name: "Our team" , link: "/team"},
        {name: "Donors and partners" , link: "/Donors-and-partners"},
        
    ]
    const ourAddress = [
        {name: "Mahutolly Dhaka - 1100 Bangladesh" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const OurImpact = [
        {name: "Change life" , link: "/Change"},
        {name: "Easy Life" , link: "/Change"},
        {name: "Latest news" , link: "/Latest-news"},
    ]
    const OurWork = [
        {name: "Education" , link: "/education"},
        {name: "Money Donate" , link: "/money"},
        {name: "Foots" , link: "/foots"},
        {name: "Helps" , link: "/helps"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="About-us" menuItems={AboutUs}/>
                    <FooterCol key={2} menuTitle="Our work" menuItems={OurWork}/>
                    <FooterCol key={3} menuTitle="Our impact" menuItems={OurImpact}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/groups/youngstarfoundation1"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+880 18404-09764</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright&#169; {(new Date()).getFullYear()} Young Star Foundation All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
