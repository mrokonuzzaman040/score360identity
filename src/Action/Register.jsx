import React from 'react';

import img1 from '../assets/Footer/logo_bbb-2073def4.svg';
import img2 from '../assets/Footer/logo_lock-316eb37c.svg';
import img3 from '../assets/Footer/seal_image-262c4656.png';
import usePublicApi from '../Hooks/usePublicApi';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const curretData = new Date().toLocaleDateString();
    const naviget = useNavigate();
    const publicApi = usePublicApi();
    const createdAt = new Date().toLocaleDateString();
    const createTime = new Date().toLocaleTimeString();

    const handelSubmit = ( e ) => {
        e.preventDefault();
        const firstName = document.getElementById( 'firstName' ).value;
        const lastName = document.getElementById( 'lastName' ).value;
        const email = document.getElementById( 'email' ).value;
        const password = document.getElementById( 'password' ).value;
        const phoneNumber = document.getElementById( 'phoneNumber' ).value;
        const dob = document.getElementById( 'dob' ).value;
        const address = document.getElementById( 'address' ).value;
        const city = document.getElementById( 'city' ).value;
        const state = document.getElementById( 'state' ).value;
        const zip = document.getElementById( 'zip' ).value;
        const checkbox = document.getElementById( 'checkbox' ).checked;

        const data = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            dob,
            address,
            city,
            state,
            zip,
            createdAt,
            createTime,
        };

        if ( firstName === '' || lastName === '' || email === '' || password === '' || phoneNumber === '' || dob === '' || address === '' || city === '' || state === '' || zip === '' ) {
            toast.error( 'All fields are required' );
        }
        else {
            if ( checkbox === false ) {
                toast.error( 'Please check the checkbox' );
            } else {
                publicApi.post( '/register-user', data )
                    .then( ( res ) => {
                        toast.success( 'Registration Successful' );
                        naviget( `/payment/${res.data.userId}` );
                    } )
                    .catch( ( err ) => {
                        toast.error( 'Registration Failed' );
                        console.log( err );
                    } );
            }
        }
    }

    return (
        <div>
            <div className="p-6 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 rounded ">
                {/* Left Column */ }
                <form onSubmit={ handelSubmit } className="bg-white shadow-lg shadow-slate-400 rounded p-6">
                    <h2 className="font-bold mb-6">ACCOUNT INFORMATION</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        <div className="flex flex-col mb-2">
                            <label htmlFor="">First Name</label>
                            <input type="text" id='firstName' placeholder="First Name *" className="border-2 rounded p-2" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="">Last Name</label>
                            <input type="text" id='lastName' placeholder="Last Name *" className="border-2 rounded p-2" />
                        </div>

                        <div className="flex flex-col mb-2">
                            <label htmlFor="">Email</label>
                            <input type="email" id='email' placeholder="Email *" className="border-2 rounded p-2" />
                        </div>

                        <div className="flex flex-col mb-2">
                            <label htmlFor="">Password</label>
                            <input type="password" id='password' placeholder="Password *" className="border-2 rounded p-2" />
                        </div>

                        <div className="flex flex-col mb-2">
                            <label htmlFor="">Phone Number</label>
                            <input type="number" maxLength={ 10 } id='phoneNumber' placeholder="Phone Number *" className="border-2 rounded p-2" />
                        </div>

                        <div className="flex flex-col mb-2">
                            <label htmlFor="">Date of Birth</label>
                            <input type="date" id='dob' placeholder="Date of Birth *" className="border-2 rounded p-2" />
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-6">CURRENT ADDRESS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* ... all input fields here */ }
                        <div className="flex flex-col mb-2">
                            <label htmlFor="">Address</label>
                            <input type="text" id='address' placeholder="Address *" className="border-2 rounded p-2" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="">City</label>
                            <input type="text" id='city' placeholder="City *" className="border-2 rounded p-2" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="">State</label>
                            <input type="text" id='state' placeholder="State *" className="border-2 rounded p-2" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="">Zip</label>
                            <input type="number" max={ 5 } maxLength={ 5 } id='zip' placeholder="Zip *" className="border-2 rounded p-2" />
                        </div>
                        {/* ... more input fields */ }
                    </div>

                    {/* Checkbox */ }
                    <label className="flex items-center mb-6">

                        <input id='checkbox' type="checkbox" className="form-checkbox"
                        />
                        <span className="ml-2 text-md text-black">
                            I have been at my current address for six months or more.
                        </span>
                    </label>

                    {/* Disclaimer */ }
                    <p className="text-[11px] text-gray-600">By clicking “next,” you consent, acknowledge, and agree to the following:</p>
                    <br />
                    <p className='text-[11px]'>Our <span className='text-blue-700 hover:cursor-pointer'>Terms and Conditions Privacy Policy,</span> and to receive important notices and <span className='text-blue-700 hover:cursor-pointer'> others communiacations electronically</span></p>

                    <p className='text-[11px] mt-3' >You are providing express “written” consent to share your information with our network <span className='text-blue-800 hover:cursor-pointer'>partners</span> and that they may share that information with their partners. You are providing express “written” consent for IDIQ, parties calling on behalf of IDIQ, network partners, or any authorized third party on their behalf to call you (including through automated means, e.g., autodialing, text messaging, and pre-recorded messaging) via telephone, mobile device (includes SMS and MMS – charges may apply), and/or email even if your telephone number is listed on any internal, corporate, state, federal, or national Do-Not-Call (DNC) list.</p>

                    <p className='text-[11px] mt-3'>
                        Consent is not required as a condition to utilize IDIQ’s services, and you may choose to speak with an individual customer service representative by contacting support@score360identity.com
                    </p>
                </form>

                {/* Right Column */ }
                <div className="bg-white shadow-lg rounded p-6 shadow-slate-400">
                    <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                    <div className="mb-4">
                        <hr />
                    </div>
                    <div className="flex justify-between mb-3">
                        <h2 className='text-xl font-bold'>Credit Essentials</h2>
                        <p className='text-xl font-bold'>$1.00</p>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                        <p className='text-blue-500 hover:cursor-pointer'>Hide Plan Details</p>
                        <p>{ curretData }. Cancel Anytime</p>
                    </div>
                    {/* ... Order Summary contents */ }
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="listIcon text-lime-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            3 Bureau Credit Report & Scores
                        </div>

                        <div className="flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="listIcon text-lime-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            ScoreCasterIQ
                        </div>
                        <div className="flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="listIcon text-lime-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            <div className="">
                                Enhanced Credit Monitoring
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="listIcon text-lime-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            Identity Protection Monitoring
                        </div>
                        <div className="flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="listIcon text-lime-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            ID Theft Insurance & Reimbursement - $1m*
                        </div>
                    </div>
                    <div className="mt-2">
                        *Underwritten by AIG
                    </div>
                    <div className="mt-10">
                        <hr />
                    </div>
                    {/* Total Due Today */ }
                    <div className="flex justify-between items-center text-black my-6 font-bold ">
                        <span>Total Due Today</span>
                        <span>$1.00</span>
                    </div>
                    {/* Submit Button */ }
                    <button onClick={ handelSubmit } className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold p-4 mt-4">
                        NEXT
                    </button>
                </div>

            </div >
            <div className="flex flex-col items-center justify-center gap-4 mb-10 mt-10">
                <div className="">
                    <img src={ img2 } alt="" />
                </div>
                <div className="flex gap-3">
                    <img src={ img1 } alt="" />
                    <img src={ img3 } alt="" />
                </div>
                <p className='text-[10px]'>©2022 IDIQ® provider of IdentityIQ® Services</p>
            </div>
            <ToastContainer />
        </div >
    );
};

export default Register;