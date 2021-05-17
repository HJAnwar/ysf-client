import React, { useState } from 'react';
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import './Contact.css'

const Contact = () => {
    
    const [contactData, setContactData] = useState({})
    
    const headleChange = e => {
        const newContactData = {...contactData}
        newContactData[e.target.name] = e.target.value;
        setContactData(newContactData)
    }

    const heandleSubmit = () => {
        fetch('http://localhost:5000/AddContact', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(contactData)
            })
                .then(res => res.json())
                .then(success => {
                    if (success) {
                      
                        alert('Send information successfully')
                    }
        })
        console.log(contactData);
    }

    return (
        <>
        <Navbar/>
        <div className="mt-5">
            <section className="contact my-5 py-5 mt-5">
                <div className="container">
                    <div className="section-header text-center text-white mb-5">
                        <h5 className="text-primary">Contact</h5>
                        <h1>Always  connect with us</h1>
                    </div>
                    <div className="col-md-9 mx-auto">
                        <form  onSubmit={heandleSubmit} >
                            <div className="form-group">
                                <input onBlur={headleChange} type="text"  className="form-control" name="email" placeholder="Email Address *" />
                            </div>
                            <div className="form-group">
                                <input onBlur={headleChange} type="text"  className="form-control" name="subject" placeholder="Subject *" />
                            </div>
                            <div className="form-group">
                                <textarea onBlur={headleChange} type="text"  className="form-control"  name="message" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="donateBtn"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        <Footer/>
        </div>
        </>
    );
};

export default Contact;