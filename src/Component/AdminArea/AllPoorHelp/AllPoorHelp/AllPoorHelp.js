import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import AllPoorHelpCart from '../AllPoorHelpCart/AllPoorHelpCart';


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
const AllPoorHelp = () => {

    const [AllPoorHelps, setAllPoorHelps] = useState([])

    const HandlePoorHelpsUpdate = (data) => {
       
    }

    const HandlePoorHelpsDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deletePoorHelp/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Delete poor help successfully");
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
       fetch('http://localhost:5000/addPoorHelp', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(success => {
         if(success){
             alert('Poor Help add successful')
             closeModal()
             refreshPage()
         }  
       })
    };


    useEffect(()=> {
        fetch('http://localhost:5000/allPoorHelp')
        .then(res => res.json())
        .then(data => setAllPoorHelps(data))
    },[])
    return (
        <div>
        <div className="d-flex justify-content-end">
            <button onClick={openModal} className='btn btn-white btn-brand'>Add Poor-Help</button>
        </div>
        <div className="d-flex justify-content-center container">
            <div className="row w-100">
                {
                    AllPoorHelps.map(AE => <AllPoorHelpCart
                        AllPoorHelps={AE}
                        Key={AE.Key}
                        HandlePoorHelpsUpdate={HandlePoorHelpsUpdate}
                        HandlePoorHelpsDelete={HandlePoorHelpsDelete}

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

export default AllPoorHelp;