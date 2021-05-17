import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../../img/ekram-31-removebg-preview.png';
import { MyContext } from '../../../App';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [loginUser, setLoginUser] = useContext(MyContext);
    const [isAdmin, setIsAdmin] = useState(false)

    const headleUserLogOut = () => {
        const newUserInfo = {
            isLogin: false,
            email: '',
            name: ''
        }
        setLoginUser(newUserInfo)
    }

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: loginUser.email})
        }).then(res => res.json())
        .then(data => {
            setIsAdmin(data)
        })
    },[])

    return (
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <Link  class="navbar-brand fluid" to='/'><img src={logo} alt="" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav   ml-auto mb-2 mb-lg-0">

                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdownLink textStyle" to="/ourProject">Our work </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdownLink" to="#">Our project</a>
                            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/socialDevelopment">Social Development</Link></li>
                                <li><Link class="dropdown-item" to="/education">Education</Link></li>
                                <li><Link class="dropdown-item" to="/helps">Help</Link></li>
                            </ul>
                        </li>

                        
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdownLink" to="#">Get involved</a>
                            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" to="#">Action</a></li>
                                <li><a class="dropdown-item" to="#">Another action</a></li>
                                <li><a class="dropdown-item" to="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link active dropdownLink" aria-current="page" >About us</a>
                            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/whoweare">Our Missin</Link></li>
                                <li><Link class="dropdown-item" to="ourTeam">Our Team </Link></li>
                                {/* <li><a class="dropdown-item" to="#">Our Adviser</a></li> */}
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/members">Members</Link>
                        </li>
                        <li>
                            <Link class="nav-link donateBtn text-white" to="/donate">Donate</Link>
                        </li>
                       {
                           loginUser.isLogin ?  
                           <button className='logOutBtn' onClick={headleUserLogOut}>Log-Out</button> 
                      : <li class="nav-item">
                           <Link class="nav-link" to="/login">Login</Link>
                       </li>
                       }
                        {isAdmin && <li class="nav-item">
                            <Link class="nav-link" to="/admin">Admin</Link>
                        </li>}
                        {/* <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;