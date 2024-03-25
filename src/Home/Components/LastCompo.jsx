import React from 'react';
import { Link } from 'react-router-dom';
const LastCompo = () => {
    return (
        <div className='mb-16'>
            <div className="pricingArea flex items-center justify-center">
                <div className="overlay flex flex-col items-center gap-5">
                    <div className="">
                        <h1 className='text-4xl text-white'>Take <span className='font-extrabold'>control</span> of your credit today!</h1>
                    </div>
                    <div className="">
                        <Link className="link" to="/register">
                            <div className="bg-[#7dbb42] p-4 rounded-full">
                                <button className='pl-5 pr-5 text-white font-bold text-xl'>GET MY SCORES</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastCompo;