import React, { useState,useEffect } from 'react';
import AllTeamMemberCart from '../AllTeamMemberCart/AllTeamMemberCart';
import photo from '../../../../img/Esthetic.png';
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

const AllTeamMember = (props) => {
    
    const[ allTeamMembers,setAllTeamMembers ] = useState([])

    const HandleTeamMemberUpdate = (data) => {
        console.log("update click", data);
    }

    const HandleTeamMemberDelete = (id) => {
        fetch(`http://localhost:5000/deleteTeam/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                alert('delete successfully')
            }
        })
        reloadui()
    }

    const reloadui = () => {
        window.location.reload()
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
       fetch('http://localhost:5000/addTeam', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(success => {
         if(success){
             alert('Team add successful')
             closeModal()
   
         }  
       })

       reloadui()
    };


    useEffect(()=> {
        fetch('http://localhost:5000/allTeam')
        .then(res => res.json())
        .then(data => {
            setAllTeamMembers(data)
        })
    },[])
    
    
    return (
        <div>
            <div className="d-flex justify-content-end">
                <button onClick={openModal} className='btn btn-white btn-brand'>Add Team Member</button>
            </div>
            <div className="d-flex justify-content-center container">
                <div className="row w-100">
                    {
                        allTeamMembers.map(ATM => <AllTeamMemberCart
                            Key={ATM.Key}
                            AllTeamMember={ATM}
                            HandleTeamMemberUpdate={HandleTeamMemberUpdate}
                            HandleTeamMemberDelete={HandleTeamMemberDelete}

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

                <h2 className="text-center" ref={_subtitle => (subtitle = _subtitle)}>Add Team Member Bro..</h2>
                
                <form className="AllEducationForm mt-5" onSubmit={handleSubmit(onSubmit1)}>

                    <input type="text" {...register("name", { required: true })} placeholder="Enter Member Name" />
                    <br />
                    {errors.title && <span>This Title is required</span>}
                    <br />
                    <input type='text' {...register("position", { required: true })} placeholder="Enter Member Position" />
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

export default AllTeamMember;