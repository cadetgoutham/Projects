import React from 'react'
import { SiFacebook } from "react-icons/si";
import { SlSocialGoogle } from "react-icons/sl";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className=' row mb-4 mx-auto justify-content-center footer' style={{ width: '40%', marginTop: '7rem' }}>
                <div className='col d-flex justify-content-center'>
                    <button className='no-border'><SlSocialGoogle className='svg ml-3 mx-3' /></button>
                    <button className='no-border'><SiFacebook className='svg ml-3 mx-3' /></button>
                    <button className='no-border'><FaLinkedin className='svg ml-3 mx-3' /></button>
                    <button className='no-border'><FaTwitterSquare className='svg ml-3 mx-3' /></button>
                </div>
            </div>
            <div className=' row mb-4 mx-auto mt-5 justify-content-center footer' style={{ width: '40%' }}>
                <p>Example@email.com</p>
                <p>Copyright &copy; 2020 Name, All rights reserved</p>
            </div>
        </>
    )
}
