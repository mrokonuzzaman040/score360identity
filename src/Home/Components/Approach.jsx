import React from 'react';

const Approach = () => {
    return (
        <div className='p-14'>
            <div className="border-l-2 border-blue-500 p-2">
                <h2 className=' text-4xl'>Our <span className='font-bold'>Approach</span></h2>
                <p className='text-xl'>Know what is in your credit reports at the major credit reporting agencies.</p>
            </div>

            <div className="p-6">
                <div className="flex flex-col gap-3 mt-2">
                    <h2 className='text-2xl text-blue-400'>Know</h2>
                    <p className=''>
                        Our goal is to help you understand the things that impact your credit and identity. We provide education, resources and the ability to monitor your credit and identity so you are informed.
                    </p>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                    <h2 className='text-2xl text-blue-400'>Watch</h2>
                    <p className=''>
                        Our industry-leading services help you plan for that big purchase or monitor your credit file, so you can take control of your financial future.
                    </p>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                    <h2 className='text-2xl text-blue-400'>Plan</h2>
                    <p className=''>
                        Our features and services help you plan for the future. Whether you have a target score and want to figure out how to get there or want to plan for the unexpected, our plan can work for you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Approach;