import React from 'react';
import review from './../../assets/review/revieew.png';
const Review = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 mt-10 p-10 lg:p-6'>
            <div className="flex flex-col items-center justify-center gap-10">
                <img className='w-36' src={ review } alt="" />
                <p className='text-xl'>
                    “What I love about IdentityIQ services is their alerts. I continue to get alerts about my identity, as well as any credit issues. This is something I enjoy because it gives me peace of mind every single day knowing that its being worked on and monitored."
                </p>
            </div>
            <a className='text-blue-500' href="#">- Noor, IdentityIQ Customer Since 2009</a>
        </div>
    );
};

export default Review;