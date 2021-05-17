import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import './Donate.css';

const Donate = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addDonate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(success => {
            if (success) {
                alert("Donate submit successfully")
            }
        })


    };
    console.log(errors);

    return (
        <>
            <Navbar />
            <div className=" mt-5 DonateFormStyle d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="number" placeholder="Amount" {...register("Amount", { required: true })} />
                    <br />
                    <input type="text" placeholder="Full Name" {...register("Name", { required: true, maxLength: 30 })} />
                    <br />

                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <br />

                    <input type="tel" placeholder="Mobile number" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} />
                    <br />

                    <input type="text" placeholder="Address" {...register("Address", { required: true, min: 100 })} />
                    <br />
                    <h6 className="payBkash"> You can pay money this Bkash 01840409764 number And send Bkash Transaction ID . </h6>
                    <br />

                    <input className="DonateSubmitBtn" type="submit" />
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Donate;
