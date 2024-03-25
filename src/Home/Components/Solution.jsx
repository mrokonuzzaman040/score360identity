import React from 'react';
import img1 from '../../assets/benifit/1.png';
import img2 from '../../assets/benifit/2.png';
import img3 from '../../assets/benifit/3.png';
import img4 from '../../assets/benifit/4.png';
const Solution = () => {
    return (
        <div className='lg:flex p-16 gap-10'>
            <div className="flex flex-col items-center gap-6">
                <div className="w-16">
                    <img src={ img1 } alt="" />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <p className='text-blue-500 font-bold text-center mb-2'>CREDIT REPORTS & SCORES</p>
                    <p className='text-sm'>Get your complete credit outlook as well as insights into your credit report profile with up to 12 reports a year, something most our competitors don’t offer.</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="w-16">
                    <img src={ img2 } alt="" />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <p className='text-blue-500 font-bold text-center mb-2'>CREDIT MONITORING</p>
                    <p className='text-sm'>Monitoring can alert you to suspicious activity as well as to new accounts and other changes. Our U.S.-based customer service team of experts can assist you with questions if anything looks suspicious.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <div className="w-16">
                    <img src={ img3 } alt="" />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <p className='text-blue-500 font-bold text-center mb-2'>IDENTITY THEFT MONITORING</p>
                    <p className='text-sm'>Your identity goes beyond your credit report. We actively monitor your Social Security number, change-of-address notifications, international and national most-wanted lists, and for your information on the dark web.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <div className="w-16">
                    <img src={ img1 } alt="" />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <p className='text-blue-500 font-bold text-center mb-2'>IDENTITY THEFT INSURANCE</p>
                    <p className='text-sm'>With up to $1 million in identity theft insurance that covers out-of-pocket expenses, lost wages, legal advice, and lost funds, you have financial peace of mind.*</p>
                </div>
            </div>
        </div>
    );
};

export default Solution;