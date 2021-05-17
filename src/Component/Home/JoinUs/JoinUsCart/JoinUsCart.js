import React from 'react';
import './JoinUsCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const JoinUsCart = (props) => {
    const { icon, title, quantity, link} = props.joinUs;

    return (
        
            <div  className="col-md-3 mt-5 text-center JoinUs ">
              <a className="joinStyle" href={'/'+link}>
              <FontAwesomeIcon className="icons"  icon={icon}  />
                 <h3 className="mt-4 mb-3 textColor">{title}</h3>
              <h4>{quantity}</h4>
              </a>
              <h1></h1>
            </div>
       
    );
};

export default JoinUsCart;