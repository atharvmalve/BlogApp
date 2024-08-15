import React from 'react';
import Day1 from '../components/Day1';
import Day2 from '../components/Day2';
import Day3 from '../components/Day3';

function HomePage() {
  return (
    <div className='bg-black w-fit md:w-screen min-h-screen pt-4 '>
        <div className='flex justify-center'>
            <div className=' text-3xl   w-fit h-fit '>
                <h1 className='text-white italic font-bold text-center'>sevenDaysOf</h1>
                <h1 className='text-white italic font-bold -mt-2  text-center'>
                <span className='bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900'>
                    REACT
                </span>
                (Basics)
                </h1>
            </div>
        </div>
        <div className=' px-8'>
            <div className='mt-12 md:px-2 flex-row md:flex justify-center gap-x-4'>
                <Day1/>
                <Day2/>
                <Day3/>
            </div>
        </div>
      
    </div>
  );
}

export default HomePage;
