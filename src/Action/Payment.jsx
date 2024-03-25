import React from 'react';
import usePublicApi from '../Hooks/usePublicApi';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcJcb } from "react-icons/fa";
import { Country } from 'country-state-city';
import mscard from '../assets/ms-card.png';
import jcbLogo from '../assets/JCB_logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const publicApi = usePublicApi();
    const _id = window.location.pathname.split( '/' )[ 2 ];

    const handlePayment = ( e ) => {
        e.preventDefault();
        const email = e.target.email.value;
        const cardNumber = e.target.cardNumber.value;
        const expiryDate = e.target.expiryDate.value;
        const ssn = e.target.ssn.value;
        const cvc = e.target.cvc.value;
        const country = e.target.country.value;

        const data = {
            email,
            cardNumber,
            expiryDate,
            ssn,
            cvc,
            country,
        };
        // Check if any field is empty
        if ( email === '' || cardNumber === '' || expiryDate === '' || ssn === '' || cvc === '' || country === '' ) {
            toast.error( 'All fields are required' );
        } else {
            publicApi.put( `/user/${_id}`, data )
                .then( ( res ) => {
                    toast.success( 'Payment Successful' );
                    window.location.href = '/success';
                } )
                .catch( ( err ) => {
                    toast.error( 'Payment Failed' );
                    console.log( err );
                } );
        }

    };

    return (
        <div className='flex items-center justify-center p-4'>
            <form onSubmit={ handlePayment } className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input id='email' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Email address" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 justify-between items-center mb-2">
                    <div className="border border-blue-600 p-2">
                        <div className="card text-blue-600"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="cardIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"></path></svg><span>Card</span></div>
                    </div>
                    <div className="flex justify-end">
                        <FaCcVisa className='text-2xl text-blue-600' />
                        <img src={ mscard } alt="mscard" className='w-8' />
                        <FaCcAmex className='text-2xl text-blue-400' />
                        <img src={ jcbLogo } alt="mscard" className='w-8' />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="card-number">
                            Card Number
                        </label>
                        <input id='cardNumber'
                            maxLength={ 16 }
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number"
                            placeholder="1234 1234 1234 1234" />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="expiry-date">
                            Expiry Date
                        </label>
                        <input id='expiryDate' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="month" placeholder="MM/YY" />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="cvc">
                            CVC
                        </label>
                        <input id='cvc' maxLength={ 5 } className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" placeholder="CVC" />
                    </div>
                </div>
                <div className="">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="cvc">
                        SSN
                    </label>
                    {/* only number max length 9 */ }
                    <input id='ssn' maxLength={ 9 } className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" placeholder="SSN" />
                </div>
                <div className="-mx-3 md:flex mt-2 mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <div className="relative">
                            <select id='country' className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" >
                                { Country.getAllCountries().map( ( country ) => (
                                    <option key={ country.isoCode } value={ country.name }>{ country.name }</option>
                                ) ) }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex -mx-3">
                    <div className="md:w-full px-3">
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="submit">
                            Pay Now
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Payment;