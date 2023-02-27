import React from 'react';
import { FaKey, FaLock, FaUserCircle } from "react-icons/fa";
import Navbar from '../../../pages/Shared/Navbar/Navbar'
import './FlightsLogin.css'

const FlightsLogin = () => {
    return (
        <div>
            <Navbar />
            <div className='container-flights'>
                <div className='box-flights'>
                    <div className='cover-flights'></div>
                    <div className='shadow-flights'></div>
                    <div className='content-flights'>
                        <div className='form-flights'>
                            <h3 className='logo-flights'>
                                <FaKey className='icon-flights' />
                            </h3>
                            <h2>Sign Up</h2>
                            <div className='inputBox-flights'>
                                <input type='email' required />
                                <FaUserCircle className='icon-flights' />
                                <span>Email</span>
                            </div>
                            <div className='inputBox-flights'>
                                <input type='password' required />
                                <FaLock className='icon-flights' />
                                <span>Password</span>
                            </div>
                            <div className='links-flights'>
                                <p>Already have an account ?</p>
                                <a href='/'>SignIn</a>
                            </div>
                            <a className='inputBox-flights' href='/flights'>
                                <div >
                                    <input type='submit' value='Sign Up' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightsLogin;