import React from 'react';
import { useNavigate } from 'react-router-dom';
import weatherapp from '../assets/WeatherApp.svg'

function Day2() {
    const navigate=useNavigate();
    const redirect=()=>{
        navigate('/day2');
    }
  return (
    <div className=" w-fit p-2 border-2 rounded-xl border-neutral-800 bg-neutral-900 hover:bg-neutral-950  relative inline-block overflow-hidden group-hover:animate-none">
      <div className='flex justify-center'>
        <div className="relative bg-black w-80 md:w-96 h-56 rounded-lg z-10">
            <div className='flex justify-center mt-16'>
                <img src={weatherapp} className='animate-see-saw  '/>
            </div>
            <div className='flex justify-end'>
                <div className=' text-sm   w-fit h-fit '>
                    <h1 className='text-neutral-200 italic font-bold text-center'>dayTwoOf</h1>
                    <h1 className='text-neutral-200 italic font-bold -mt-1  text-center'>
                    <span className='bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900'>
                        REACT
                    </span>
                    (Basics)
                    </h1>
                </div>
            </div>
        </div>
      </div>
      <div className="relative mx-3 w-80 md:w-96 z-10">
        <h1 className="font-bold text-neutral-600 text-left mt-2 text-base font-inter">Day 2</h1>
        <h1 className="font-bold text-neutral-300 text-left text-3xl font-inter -mt-1">Weather App</h1>
        <div>
          <h1 className="font-inter mt-1 font-medium text-sm w-fit rounded-sm bg-black text-neutral-500 px-2">
            API Handling
          </h1>
        </div>
        <h1 className="text-neutral-400  text-base mt-2 mr-2">
        Built a dynamic weather app using React JS. Fetches real-time data, displays current conditions, forecasts, and location-based results.
        </h1>
        <button
        onClick={redirect} 
        className='text-neutral-300 mt-4 rounded font-inter   px-4 py-1 border-2 border-solid border-neutral-700
        hover:bg-neutral-300 hover:border-transparent  hover:text-black transition-all duration-200 hover:font-semibold'> Read More</button>
      </div>
    </div>
  );
}

export default Day2;
