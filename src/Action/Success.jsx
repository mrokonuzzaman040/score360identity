import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import App from './components/chart';

const Success = () => {
    const todaysData = new Date().toISOString().split( 'T' )[ 0 ];
    const currentDate = new Date();
    const options = { month: 'long' };
    const monthName = new Intl.DateTimeFormat( 'en-US', options ).format( currentDate );

    const todaysDataWithMonth = `${currentDate.getDate()} ${monthName} ${currentDate.getFullYear()}`;

    return (
        <div>
            <h1 className='text-2xl text-center text-[#00c49f]'>Your transaction was successful on <span className='text-gray-400'>{ todaysDataWithMonth }</span></h1>
            <div className='flex items-center justify-center '>
                <App />
            </div>
        </div>
    );
};

export default Success;