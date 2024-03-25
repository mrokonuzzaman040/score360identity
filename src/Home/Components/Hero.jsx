import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import hero from '../../assets/Hero/hero.jpg';
import { FaCheckCircle } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='lg:flex items-center justify-between overflow-hidden'>
            <div className="">
                <img className='lg:w-3/4 max-h-full' src={ hero } alt="" />
            </div>
            <div className="flex flex-col p-10 gap-3">
                <div className="text-gray-700 mt-12 lg:mt-0">
                    <h2 className='text-4xl'>Get Your Credit Scores <br /> from <span className='font-extrabold'>All 3 Bureaus!</span></h2>
                    <p className='font-extrabold text-xl'>7 DAYS FOR $1. <span className='font-normal text-sm'>THEN ONLY $29.99</span>
                    </p>
                </div>
                <div className="flex flex-col gap-1 text-xl">
                    <div className="flex gap-2 lg:items-center items-start">
                        <div className=""><FaCheckCircle className='listIcon text-sm lg:text-xl text-lime-400' /></div>
                        <div className="">
                            <p className='sm:text-sm lg:text-xl'>Credit Report and Credit Scores</p>
                        </div>
                    </div>

                    <div className="flex gap-2 lg:items-center">
                        <div className=""><FaCheckCircle className='listIcon text-sm lg:text-xl text-lime-400' /></div>
                        <p className='sm:text-sm lg:text-xl'>Daily Credit Monitoring & Alerts</p>
                    </div>
                    <div className="flex gap-2 lg:items-center">
                        <div className=""><FaCheckCircle className='listIcon text-sm lg:text-xl text-lime-400' /></div>
                        <p className='sm:text-sm lg:text-xl'>ScoreCasterIQ® - Customized report analysis, score simulations and recommendations</p>
                    </div>
                    <div className="flex gap-2 lg:items-center">
                        <div className=""><FaCheckCircle className='listIcon text-sm lg:text-xl text-lime-400' /></div>
                        <p className='sm:text-sm lg:text-xl'>More Contact US 24/7</p>
                    </div>
                    <div className="flex gap-2 lg:items-center">
                        <div className=""><FaCheckCircle className='listIcon text-sm lg:text-xl text-lime-400' /></div>
                        <p className='sm:text-sm lg:text-xl w-auto flex-wrap'>
                            <span>support@score360identity.com</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center text-center gap-14">
                    <Link to={ '/register' } className="middle none center mr-4 rounded-lg bg-[#7dbb42]  py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true">Get My <span>Scores</span></Link>
                    {/* <button id='learn' className='p-3 w-[150px] lg:p-4 lg:w-[240px] rounded-3xl text-xl'>Learn More</button> */ }
                    <button id='learn' className="middle none center mr-4 rounded-lg bg-[#7dbb42]  py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true">Learn More</button>
                </div>
                <div className="">
                    <p className='text-sm'>
                        Checking your own credit will NOT hurt your score.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;