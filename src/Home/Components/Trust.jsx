import React from 'react';
import img1 from '../../assets/Trust/1.png';
import img2 from '../../assets/Trust/2.png';
import img3 from '../../assets/Trust/3.png';
import img4 from '../../assets/Trust/4.png';
import img5 from '../../assets/Trust/5.png';
const Trust = () => {
    return (
        <>
            <div className="bg-gray-100 p-10 ">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center">
                    {/* Each div below represents a badge/award icon container */ }
                    <div className="">
                        <img src={ img1 } alt="Inc 5000 Badge" className="h-40 lg:h-36" />
                    </div>

                    <div>
                        <img src={ img2 } alt="Inc 5000 Badge" className="h-40 lg:h-36" />
                    </div>

                    <div>
                        <img src={ img3 } alt="Inc 5000 Badge" className="h-40 lg:h-36" />
                    </div>

                    <div className="text-gray-600">
                        <img src={ img4 } alt="Inc 5000 Badge" className="h-40 lg:h-36" />
                    </div>

                    <div>
                        <img src={ img5 } alt="Inc 5000 Badge" className="h-40 lg:h-36" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Trust;