import React from 'react';

import Image from 'next/image';
import mainBuilding from '../../../public/images/main-building.jpg'


const AboutPage = () => {
    return (

        <main className='relative flex items-center justify-center  min-h-screen'>

            <Image
                src={mainBuilding}
                alt='main building'
                fill
                className='object-cover -z-10'
                priority
            />

            <div className='flex flex-col gap-8 justify-center items-center'>
                <h1 className='text-6xl bg-[#CEAB93] px-6 py-2 text-[#FFFBE9] font-bold'>
                    Explore the campus
                </h1>
                <button className='border-2 border-[#fff] rounded-md bg-transparent w-max px-4 py-2 cursor-pointer font-bold text-white'>
                    Start Tour
                </button>
            </div>
        </main>


    );
};

export default AboutPage;