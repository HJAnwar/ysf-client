// import React from 'react';
// import Modal from 'react-modal';
// import { useForm } from 'react-hook-form';


// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };



// const UpdateEducation = (props) => {

//     console.log(props.open);

    
//     return (
//         <div>
            
//             <Modal
//                     isOpen={modalIsOpen}
//                     onRequestClose={closeModal}
//                     style={customStyles}
//                     contentLabel="Example Modal"
//                 >

//                     <h2 className="text-center" ref={_subtitle => (subtitle = _subtitle)}>Add Education Bro..</h2>
//                     <form className="AllEducationForm mt-5" onSubmit={handleSubmit(onSubmit)}>

//                         <input {...register("title", { required: true })} placeholder="Enter Your Title" />
//                         <br/>
//                         {errors.title && <span>This Title is required</span>}
//                         <br/>
//                         <textarea  className="textarea" {...register("description", { required: true })} placeholder="Enter Your Description" rows="5"></textarea>
//                         <br/>
//                         {errors.description  && <span>This Description is required</span>}
//                         <br/>
//                         <input   className="inputFile" {...register("file", { required: true })} type="file" name="" id=""/>
//                         <br/>
//                         {errors.file  && <span>This File is required</span>}
//                         <br/>
//                         <input className="btn-brand" type="submit" />
//                     </form>
//                 </Modal>
            
//         </div>
//     );
// };

// export default UpdateEducation;


