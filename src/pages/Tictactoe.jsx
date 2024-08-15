import React from "react";
import { useNavigate } from "react-router-dom";
import tictactoe from "../assets/Tictactoe.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Tictactoe() {
    const navigate=useNavigate();
    const redirect=()=>{
        navigate('/');
    }
  return (
    <div className="bg-black w-fit md:w-fit  h-full pt-4 pb-12 ">
      <div className="flex justify-center">
        {/* <div className='text-neutral-400'>
            Back
        </div> */}
        <button 
        className=" text-3xl w-fit h-fit hover:opacity-75 "
        onClick={redirect}>
          <h1 className="text-white italic font-bold text-center">dayOneOf</h1>
          <h1 className="text-white italic font-bold -mt-2  text-center">
            <span className="bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900">
              REACT
            </span>
            (Basics)
          </h1>
        </button>
      </div>
      <div className="flex justify-center my-12 ">
        <img src={tictactoe} className="animate-see-saw size-72" />
      </div>
      <div className="px-12">
        <h1 className="text-neutral-600 font-medium font-inter text-left text-base">
          My First React Project
        </h1>
        <h1 className="text-neutral-300 font-bold font-inter text-left text-5xl">
          TIC-
          <span className="bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900">
            TAC
          </span>
          -TOE
        </h1>
      </div>
      <div className="flex px-12">
        <h1 className="font-inter mt-3 font-medium text-left text-base w-fit rounded-sm bg-neutral-900 text-neutral-500 px-2">
          State Management
        </h1>
      </div>
      <div className="blog-post text-white px-12 mt-6 ">
      <h1 className="text-xl text-neutral-300 font-bold font-inter ">A Journey into React and Tailwind CSS</h1>
      <p className="font-inter text-lg text-neutral-400 mt-3">
        As I embarked on the 7-day React challenge, I knew I wanted to start with something simple yet rewarding. Given my prior experience with JavaScript game development, Tic Tac Toe seemed like the perfect fit. This classic game would allow me to focus on understanding React's core concepts without getting overwhelmed by complex features.
      </p>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Project Overview</h2>
      <ul className="font-inter text-lg text-neutral-400 mt-3 px-4 list-disc">
        <li>Creating a game board: A 3x3 grid of squares was rendered using React components.</li>
        <li>Implementing player turns: The game alternated between two players (X and O).</li>
        <li>Checking for winning conditions: The game logic was designed to detect winning combinations (rows, columns, diagonals).</li>
        <li>Handling ties: If no player could win, the game would end in a tie.</li>
      </ul>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Using React Components</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
        React's component-based architecture was instrumental in structuring the game. I created components for the game board, individual squares, and the game's state management. This modular approach made the code more maintainable and easier to understand.
      </p>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Leveraging Tailwind CSS</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
        Tailwind CSS proved to be a valuable tool for styling the game. Its utility-first approach allowed me to quickly create a visually appealing interface without writing custom CSS classes. I was able to customize the colors, fonts, and layout of the game board and pieces using Tailwind's predefined utility classes.
      </p>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Key Learnings</h2>
      <ul className="font-inter text-lg text-neutral-400 mt-3 px-4 list-disc">
        <li>React's core concepts: Components, state management, and JSX syntax.</li>
        <li>Component-based architecture: Organizing code into reusable components.</li>
        <li>State management: Using state to store and update game data.</li>
        <li>Event handling: Responding to user interactions (e.g., clicking on squares).</li>
        <li>Conditional rendering: Displaying different content based on game state.</li>
      </ul>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Conclusion</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
        While my Tic Tac Toe project may seem simple, it served as an excellent foundation for my React journey. By starting with a small, manageable project, I was able to build confidence and gain a practical understanding of React's fundamentals. I encourage others who are new to React to start with a similar project to get their feet wet.
      </p>
      <p className="font-inter text-lg text-neutral-400 mt-3 italic ">
        Note: I have shared my LinkedIn post and GitHub repository for reference. Due to the project's simplicity, deployment is not necessary.
      </p>
    </div>
    <div className="text-white px-12 mt-10 flex gap-x-5">
    <a href="https://github.com/atharvmalve/TicTacToe"><FaGithub className="size-10 hover:text-indigo-900 transition-all duration-300" /></a>
    <a href="https://www.linkedin.com/posts/atharvmalve_7daysofreactbasics-reactbasics-learninpublic-activity-7184109084986540032-xDXJ?utm_source=share&utm_medium=member_desktop"><FaLinkedin className="size-10 hover:text-blue-900 transition-all duration-300" /></a>
    </div>
    </div>
  );
}

export default Tictactoe;
