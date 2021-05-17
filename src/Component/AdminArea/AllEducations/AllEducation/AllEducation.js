import React, { useEffect, useState } from 'react';
import AllEducationCart from '../AllEducationCart/AllEducationCart';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import './AllEducation.css'


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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


const AllEducation = () => {
    const [AllEducations, setAllEducations] = useState([])

    const HandleEducationUpdate = (data) => {
       
    }

    const HandleEducationDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteEducation/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert("Delete education  successfully ");
            }
        })
        refreshPage()
    }
    const refreshPage = () =>{
        window.location.reload();
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
    const onSubmit1 = data => {
       fetch('http://localhost:5000/addEducation', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(success => {
         if(success){
             alert('education add successful')
             closeModal()
             refreshPage()
         }  
       })
    };


    useEffect(()=> {
        fetch('http://localhost:5000/allEducation')
        .then(res => res.json())
        .then(data => setAllEducations(data))
    },[])


    return (
        <div>
            <div className="d-flex justify-content-end">
                <button onClick={openModal} className='btn btn-white btn-brand'>Add Education</button>
            </div>
            <div className="d-flex justify-content-center container">
                <div className="row w-100">
                    {
                        AllEducations.map(AE => <AllEducationCart
                            AllEducations={AE}
                            Key={AE.Key}
                            HandleEducationUpdate={HandleEducationUpdate}
                            HandleEducationDelete={HandleEducationDelete}


                        />)
                    }
                </div>
            </div>
            <div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 className="text-center" ref={_subtitle => (subtitle = _subtitle)}>Add Education Bro..</h2>
                    <form className="AllEducationForm mt-5" onSubmit={handleSubmit(onSubmit1)}>

                        <input type="text" {...register("title", { required: true })} placeholder="Enter Your Title" />
                        <br />
                        {errors.title && <span>This Title is required</span>}
                        <br />
                        <textarea className="textarea" {...register("subDescription", { required: true })} placeholder="Enter Your Sub-Description" rows="5"></textarea>
                        <br />
                        {errors.description && <span>This Description is required</span>}
                        <br />
                        <textarea className="textarea" {...register("description", { required: true })} placeholder="Enter Your Description" rows="10"></textarea>
                        <br />
                        {errors.description && <span>This Description is required</span>}
                        <br />
                        <input type="url" placeholder="image url" {...register("imgUrl", {})} />
                        <br />
                        {errors.title && <span>This Title is required</span>}
                        <br />
                        <input className="btn-brand" type="submit" />
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default AllEducation;