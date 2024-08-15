import React from "react";
import { useNavigate } from "react-router-dom";
import weatherapp from '../assets/WeatherApp.svg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function WeatherApp() {
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
          <h1 className="text-white italic font-bold text-center">dayTwoOf</h1>
          <h1 className="text-white italic font-bold -mt-2  text-center">
            <span className="bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900">
              REACT
            </span>
            (Basics)
          </h1>
        </button>
      </div>
      <div className="flex justify-center my-12 ">
        <img src={weatherapp} className="animate-see-saw size-80" />
      </div>
      <div className="px-12">
        <h1 className="text-neutral-600 font-medium font-inter text-left text-base">
          Introduction to Third-Party APIs
        </h1>
        <h1 className="text-neutral-300 font-bold font-inter text-left text-5xl">
          
          <span className="bg-gradient-to-b text-transparent bg-clip-text from-cyan-400 to-cyan-900">
            WEATHER
          </span> {" "}
           APP
        </h1>
      </div>
      <div className="flex px-12">
        <h1 className="font-inter mt-3 font-medium text-left text-base w-fit rounded-sm bg-neutral-900 text-neutral-500 px-2">
          API Handling
        </h1>
      </div>
      <div className="blog-post text-white px-12 mt-6 ">
      <h1 className="text-xl text-neutral-300 font-bold font-inter ">Introduction</h1>
      <p className="font-inter text-lg text-neutral-400 mt-3">
      As part of the 7-day React challenge, I decided to delve into a more practical project: a weather app. This project presented a unique opportunity to explore the world of third-party APIs and apply React's concepts to a real-world application.
      </p>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Choosing a Third-Party API</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3">
      The first step was to select a suitable weather API. After researching various options, I opted for [API Name], a popular choice known for its extensive data coverage and user-friendly API. Integrating this API into my React app would provide me with a wealth of weather information to display to users.
      </p>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Understanding the API</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3">
      Before diving into the implementation, I spent time familiarizing myself with the API's documentation. I learned about the different endpoints, request parameters, and data structures. This understanding was crucial for effectively fetching and processing weather data within my React app.
      </p>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Building the User Interface</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3">
      With a solid grasp of the API, I turned my attention to designing the user interface. I aimed for an intuitive and visually appealing experience. The app's layout included:
      </p>
      <ul className="font-inter text-lg text-neutral-400 mt-3 px-4 list-disc">
      <li>Search bar: A simple input field for users to enter city names.</li>
        <li>Weather information: A section displaying key weather details like temperature, humidity, wind speed, and condition.</li>
        <li>Additional details: Optional sections for more in-depth information, such as a forecast for the next few days or a map visualization.</li>
      </ul>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Implementing API Calls</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
      Using React's state management and lifecycle methods, I implemented the API calls within my app. Whenever a user searched for a city, the app would send a request to the API with the specified city name. The API response would then be parsed and updated in the app's state, triggering a re-render to display the fetched weather data.
      </p>
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Handling Errors and Loading States</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
      To provide a seamless user experience, I implemented error handling and loading states. If the API request failed or the data was invalid, the app would display an appropriate error message. Additionally, while the API call was in progress, a loading indicator would be shown to keep users informed.
      </p>
      
      <h2 className="text-xl text-neutral-300 font-bold font-inter mt-6 ">Conclusion</h2>
      <p className="font-inter text-lg text-neutral-400 mt-3 ">
      Building a weather app using a third-party API was a valuable learning experience. I gained practical knowledge of API handling in React, improved my understanding of user interface design, and explored the possibilities of leveraging external data sources. While this project is relatively basic, it serves as a strong foundation for future React projects involving API integrations.
      </p>
      <p className="font-inter text-lg text-neutral-400 mt-3 italic ">
        Note: I have shared my LinkedIn post and GitHub repository for reference. Due to the project's simplicity, deployment is not necessary.
      </p>
    </div>
    <div className="text-white px-12 mt-10 flex gap-x-5">
    <a href="https://github.com/atharvmalve/WeatherApp"><FaGithub className="size-10 hover:text-indigo-900 transition-all duration-300" /></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7184505208201199616/"><FaLinkedin className="size-10 hover:text-blue-900 transition-all duration-300" /></a>
    </div>
    </div>
  );
}

export default WeatherApp;
