import React, { useState, useEffect } from 'react';
import AllWhoWeAreCart from '../AllWhoWeAreCart/AllWhoWeAreCart';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


const AllWhoWeAre = () => {

    const [AllWhoWeAres, setAllWhoWeAres] = useState([]);

    const HandleWhoWeAreUpdate = (data) => {

    }

    const HandleWhoWeAreDelete = (id) => {
        console.log('delete data');
        fetch(`http://localhost:5000/deleteWhoWeAre/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('delete successfully')
            }
        })

    }



    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addWhoWeAre', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(success => {
                if (success) {
                    alert("who we are submit successfully")
                    closeModal()
                }
            })
    };

    useEffect(() => {
        fetch('http://localhost:5000/allWhoWeAreLoad')
            .then(res => res.json())
            .then(data => {
                setAllWhoWeAres(data)
            })
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-end">
                <button onClick={openModal} className='btn btn-white btn-brand'>Add Who We Are</button>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-100">
                    {
                        AllWhoWeAres.map(AWWA => <AllWhoWeAreCart
                            AllWhoWeAres={AWWA}
                            Key={AWWA.Key}
                            HandleWhoWeAreUpdate={HandleWhoWeAreUpdate}
                            HandleWhoWeAreDelete={HandleWhoWeAreDelete}


                        />)
                    }
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center" ref={_subtitle => (subtitle = _subtitle)}>Add Education Bro..</h2>
                <form className="AllEducationForm mt-5" onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("title", { required: true })} placeholder="Enter Your Title" />
                    <br />
                    {errors.title && <span>This Title is required</span>}
                    <br />
                    <input {...register("subtitle", { required: true })} placeholder="Enter Your SubTitle" />
                    <br />
                    {errors.subtitle && <span>This SubTitle is required</span>}
                    <br />
                    <textarea className="textarea" {...register("description", { required: true })} placeholder="Enter Your Description" rows="5"></textarea>
                    <br />
                    {errors.description && <span>This Description is required</span>}
                    <br />
                    <input className="btn-brand" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AllWhoWeAre;