import React from "react";
import { useNavigate } from "react-router-dom";
import passwordgenerator from '../assets/Passwordgenerator.svg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function PasswordGenerator() {
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
          <h1 className="text-white italic font-bold text-center">dayThreeOf</h1>
          <h1 className="text-white italic font-bold -mt-2  text-center">
            <span className="bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900">
              REACT
            </span>
            (Basics)
          </h1>
        </button>
      </div>
      <div className="flex justify-center my-12 ">
        <img src={passwordgenerator} className="animate-see-saw size-96" />
      </div>
      <div className="px-12">
        <h1 className="text-neutral-600 font-medium font-inter text-left text-base">
         Understanding React Hooks
        </h1>
        <h1 className="text-neutral-300 font-bold font-inter text-left text-5xl">
          
          <span className="bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900">
            PASSWORD
          </span> {" "}
           GENERATOR
        </h1>
      </div>
      <div className="flex px-12">
        <h1 className="font-inter mt-3 font-medium text-left text-base w-fit rounded-sm bg-neutral-900 text-neutral-500 px-2">
          React Hooks
        </h1>
      </div>
      <div className="blog-post text-white px-12 mt-6 ">
      <h1 className="text-xl text-neutral-300 font-bold font-inter ">Introduction</h1>
      <p className="font-inter text-lg text-neutral-400 mt-3">
      As part of my 7-day React challenge, I decided to build a password generator. This project allowed me to practice using various React hooks, such as useState, useEffect, and useRef. The goal was to create a user-friendly tool that could generate strong, customizable passwords.
      </p>
      
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Project Structure and Planning</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3">
      Before diving into the code, I outlined the key features I wanted to include in my password generator:
      </p>
      <ul className="font-inter text-lg text-neutral-400 mt-3 px-4 list-disc">
      <li>Password length customization: Users should be able to choose the desired password length.</li>
        <li>Character type selection: Users should have options to include uppercase letters, lowercase letters, numbers, and symbols.</li>
        <li>Password generation: A button should trigger the generation of a random password based on the user's preferences.</li>
        <li>Copy to clipboard functionality: Users should be able to easily copy the generated password.</li>
      </ul>

      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Implementing the Password Generation Logic</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3">
      The core functionality of the password generator involved:
      </p>
      <ul className="font-inter text-lg text-neutral-400 mt-3 px-4 list-disc">
      <li>Collecting user preferences: Gathering the selected password length and character types from the user's input.</li>
        <li>Generating a random password: Using JavaScript's Math.random function and character sets to create a random password based on the user's preferences.</li>
        <li>Updating the password display: Setting the generated password in the state and updating the password display.</li>
      </ul>


      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Copying the Password to Clipboard</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
      To enable users to easily copy the generated password, I used the useRef hook to create a reference to the password input field. When the copy button is clicked, the password input's focus is set, and the document.execCommand('copy') method is used to copy the selected text to the clipboard.
      </p>
      
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Conclusion</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
      Building a password generator with React hooks was a rewarding experience. It allowed me to practice using essential React concepts and create a useful tool. By focusing on user-friendliness and providing customizable options, I was able to create a password generator that can be valuable for users seeking strong, secure passwords.
      </p>
      <p className="font-inter text-lg text-neutral-400 mt-3 italic ">
        Note: I have shared my LinkedIn post and GitHub repository for reference. Due to the project's simplicity, deployment is not necessary.
      </p>
    </div>
    <div className="text-white px-12 mt-10 flex gap-x-5">
    <a href="https://github.com/atharvmalve/PasswordGenerator"><FaGithub className="size-10 hover:text-indigo-900 transition-all duration-300" /></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7191821761804386304/"><FaLinkedin className="size-10 hover:text-blue-900 transition-all duration-300" /></a>
    </div>
    </div>
  );
}

export default PasswordGenerator;
