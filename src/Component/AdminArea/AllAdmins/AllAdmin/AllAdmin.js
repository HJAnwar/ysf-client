import React, {useState,useEffect} from 'react';
import AllAdminCart from '../AllAdminCart/AllAdminCart';
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
const AllAdmin = () => {

    const [AllAdmins, setAllAdmins] = useState([])

    const HandleAdminDelete = (id) => {
        fetch(`http://localhost:5000/adminDelete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
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
        data.created = new Date();
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal()
                    alert('Add Admin successfully')
                }
            })
    };

    // load admin list 

    useEffect(()=> {
        fetch('http://localhost:5000/loadAdmin')
        .then(res => res.json())
        .then(data=> {
            setAllAdmins(data)
        })
    }, [])

    return (
        <>
            <div>
                <div className="d-flex justify-content-end">
                    <button onClick={openModal} className='btn btn-white btn-brand'>Make Admin</button>
                </div>
                <AllAdminCart HandleAdminDelete={HandleAdminDelete} Key={AllAdmins.Key} AllAdmins={AllAdmins} />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center" ref={_subtitle => (subtitle = _subtitle)}>Add Education Bro..</h2>
                <form className="AllEducationForm mt-5" onSubmit={handleSubmit(onSubmit)}>

                    <input  {...register("name", { required: true })} placeholder="Enter Your Name" />
                    <br />
                    {errors.name && <span>This Name is required</span>}
                    <br />
                    <input {...register("email", { required: true })} placeholder="Enter Your Email" />
                    <br />
                    {errors.email && <span>This Email is required</span>}
                    <br />
                    <input {...register("phone", { required: true })} placeholder="Enter Your Phone" />
                    <br />
                    {errors.phone && <span>This Phone is required</span>}
                    <br />
                    <input {...register("age", { required: true })} placeholder="Enter Your Age" />
                    <br />
                    {errors.age && <span>This Age is required</span>}
                    <br />

                    <input className="btn-brand" type="submit" />
                </form>
            </Modal>
        </>
    );
};

export default AllAdmin;