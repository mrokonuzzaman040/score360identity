import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <p className="text-center text-sm">
                *Underwritten by AIG. <a className='text-blue-500' href="#">Terms and Conditions</a> | <a className='text-blue-500' href="#">Privacy Policy</a>
                <br />
                ©2023 IDIQ® provider of IdentityIQ® services.
            </p>
            <hr className='mt-10  font-bold' />
            <p className='text-[10px] text-gray-700 p-10' >
                *$1 Million ID Theft Coverage – provides up to $1 million in coverage for: funds stolen by unauthorized electronic funds transfer from an account in your name, legal fees, miscellaneous expenses, and up to $1,500 per week (five weeks maximum) for wages lost while resolving a stolen identity event. Family members means the enrollee’s children under the age of twenty-four (24) who permanently live in the same residence as the enrollee at the time of the stolen identity event. Underwritten by AIG.
            </p>
        </div>
    );
};

export default Footer;