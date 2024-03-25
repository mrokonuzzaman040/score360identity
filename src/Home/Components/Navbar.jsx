import React from 'react';
// @ts-ignore
import logo from '../../assets/navbar/logo.png';
// @ts-ignore
import company from '../../assets/navbar/company.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='lg:mb-0 md:mb-5 sm:mb-4'>
            <div className="grid grid-cols-2 items-center justify-between ">
                <div className="">
                    <Link to={ '/' }>
                        <img className='h-16 p-1' src={ logo } alt="" />
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <img className='h-16 p-1' src={ company } alt="" />
                </div>
            </div>
            <hr className="border-gray-400" /> {/* Add horizontal line */ }
        </div>
    );
};

export default Navbar;