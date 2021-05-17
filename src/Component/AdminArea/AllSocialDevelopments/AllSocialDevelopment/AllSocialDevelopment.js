import React, { useEffect, useState } from 'react';
import photo from '../../../../img/Esthetic.png';
import AllSocialDevelopmentCart from '../AllSocialDevelopnemtCart/AllSocialDevelopmentCart';
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

const AllSocialDevelopment = () => {

    const [AllSocialDevelopments, setAllSocialDevelopments] = useState([])

    const HandleSocialDevelopmentsUpdate = (data) => {
        console.log("update click", data);
    }

    const HandleSocialDevelopmentsDelete = (id) => {
        fetch(`http://localhost:5000/deleteSocialDevelopment/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            alert("delete successfully bro")
        })
    }


    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal222() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/AddSocialDevelopment',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(res => res.json())
        .then(success=> {
            if(success){
                alert("this is wright")
                closeModal()
            }
        })
    };

    useEffect(()=> {
        fetch('http://localhost:5000/allSocialDevelopment')
        .then(res => res.json())
        .then(data => setAllSocialDevelopments(data))
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-end">
                <button onClick={openModal222} className='btn btn-white btn-brand'>Add Social Development</button>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-100">
                    {
                        AllSocialDevelopments.map(ASD => <AllSocialDevelopmentCart
                            AllSocialDevelopments={ASD}
                            Key={ASD.Key}
                            HandleSocialDevelopmentsUpdate={HandleSocialDevelopmentsUpdate}
                            HandleSocialDevelopmentsDelete={HandleSocialDevelopmentsDelete}


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
    );
};

export default AllSocialDevelopment;