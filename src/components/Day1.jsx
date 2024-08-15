import React from 'react';
import { useNavigate } from 'react-router-dom';
import tictactoe from '../assets/Tictactoe.svg';

function Day1() {
    const navigate=useNavigate();
    const redirect=()=>{
        navigate('/day1');
    }
  return (
    <div
     className=" w-fit p-2 border-2 rounded-xl border-neutral-800 bg-neutral-900 hover:bg-neutral-950  relative inline-block overflow-hidden">
      <div className='flex justify-center'>
        <div className="relative bg-black w-80 md:w-96 h-56 rounded-lg z-10">
            {/* <div>
                <h1 className='font-bold text-2xl text-white'>Tic-Tac-Toe</h1>
            </div> */}
            <div className='flex justify-center mt-16'>
                <img src={tictactoe} className='animate-see-saw'/>
            </div>
            <div className='flex justify-end'>
                <div className=' text-sm   w-fit h-fit '>
                    <h1 className='text-neutral-200 italic font-bold text-center'>dayOneOf</h1>
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
      <div className="relative mx-2 w-80 md:w-96 z-10">
        <h1 className="font-bold text-neutral-600 text-left mt-2 text-base font-inter">Day 1</h1>
        <h1 className="font-bold text-neutral-300 text-left text-3xl font-inter -mt-1">Tic Tac Toe</h1>
        <div>
          <h1 className="font-inter mt-1 font-medium text-sm w-fit rounded-sm bg-black text-neutral-500 px-2">
            State Management
          </h1>
        </div>
        <h1 className="text-neutral-400  text-left text-base mt-2">
          Built a classic Tic Tac Toe game using React JS. Features a clean interface, accurate win/draw detection, and smooth player turn management.
        </h1>
        <button 
        className='text-neutral-300 mt-4 rounded font-inter   px-4 py-1 border-2 border-solid border-neutral-700
        hover:bg-neutral-300 hover:border-transparent  hover:text-black transition-all duration-200 hover:font-semibold'
        onClick={redirect}> Read More</button>
      </div>
    </div>
  );
}

export default Day1;
