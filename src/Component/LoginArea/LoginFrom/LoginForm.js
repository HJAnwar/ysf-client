import React, { useContext, useState } from 'react';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Config/firebaseConfig';
import { MyContext } from '../../../App';
import './LoginForm.css';
import googleIcon from '../../../img/googleicon.png'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    
}

const LoginForm = () => {
    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: ''
        

    // });

    const [loginUser, setLoginUser] = useContext(MyContext);
 
    var provider = new firebase.auth.GoogleAuthProvider();

    const handleClick = () => {
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const { email, displayName, } = result.user;
                const newUserInfo = {
                    isLogin: true,
                    email: email,
                    name: displayName
                }
                setLoginUser(newUserInfo)

            
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    
    return (
        <div>
            <Navbar/>
            <div className="logarea  text-center">
                <button onClick={handleClick}> <img src={googleIcon} alt=""/> Google Sing-in</button>
                {/* <button onClick={setData}>store data </button> */}
            </div>
            <Footer/>
        </div>
    );
};

export default LoginForm;