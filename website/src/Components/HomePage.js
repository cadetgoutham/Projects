import React, { useState, useRef } from 'react'
import { SiFacebook } from "react-icons/si";
import { SlSocialGoogle } from "react-icons/sl";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const [username, setUsername] = useState("")
    const [password, setPassowrd] = useState("")
    const navigate = useNavigate();
    const usernameElement = useRef()
    const passwordElement = useRef()

    const HandleSubmit = (e) => {
        e.preventDefault()
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (username === "") {
            alert("username should not be empty");
            usernameElement.current.focus();
        } else if (password === "") {
            alert("password should not be empty");
            passwordElement.current.focus();
        }
        else if(password !== "" && !regex.test(password)){
            alert("password should include Atleast 1 lowercase, 1 uppercase, 1 digit, 1 symbol and atleast length of 8");
            passwordElement.current.focus();
        }
        else if ((username !== "" && username !== "admin@gmail.com") || (password !== ""&& password !== "Goutham@43")){
            alert("Username or password is wrong");
            usernameElement.current.focus();
        }
        else if (username !== "" && username === "admin@gmail.com" && password !== "" && regex.test(password) && password === "Goutham@43") {
            console.log("form submitted")
            navigate('/home');
        }
    }
    return (
        <>
            <section className="vh-88">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 text-black mob">
                            <div className="align-items-center h-custom-2 px-3 ms-xl-4 mt-5 pt-5 pt-xl-0 custom-d-login">

                                <form style={{ width: '90%' }} className="Main-form" onSubmit={(e) => { HandleSubmit(e) }}>

                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign In</h3>

                                    <p>New User? <a href="#!" className="link-info">Create an account</a></p>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg custom-input"
                                            placeholder='Username or email'
                                            value={username}
                                            onChange={(e) => (setUsername(e.target.value))}
                                            ref={usernameElement}
                                        />
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg custom-input"
                                            placeholder='Password'
                                            value={password}
                                            onChange={(e) => (setPassowrd(e.target.value))}
                                            ref={passwordElement}
                                        />
                                    </div>
                                    <div className="form-check d-flex justify-content-start mb-4 align-items-center">
                                        <input
                                            className="form-check-input custom-input"
                                            type="checkbox"
                                            value=""
                                            id="keepMesignIn"
                                            style={{ width: '32px', height: '32px' }}
                                        />
                                        <label className="form-check-label" htmlFor='KeepMesignIn' style={{ font: '16px', marginLeft: '30px' }}> Keep me signed in </label>
                                    </div>
                                    {/* <div className="pt-1 mb-4"> */}
                                    <button className="btn btn-dark btn-lg btn-block pt-1 mb-4" type="submit">Sign In</button>
                                    {/* </div> */}
                                </form>
                                <div className="text-with-lines">
                                    <span>Or Sign In With</span>
                                </div>
                                <div className='form-outline mb-4 d-flex justify-content-center'>
                                    <button className='no-border'>
                                        <SlSocialGoogle className='svg' />
                                    </button>
                                    <button className='no-border'>
                                        <SiFacebook className='svg' />
                                    </button>
                                    <button className='no-border'>
                                        <FaLinkedin className='svg' />
                                    </button>
                                    <button className='no-border'>
                                        <FaTwitterSquare className='svg' />
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block col-md-6 custom-display">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img" alt="Sampleimage" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

