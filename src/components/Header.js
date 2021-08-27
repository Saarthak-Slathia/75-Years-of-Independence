import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const toggleTheme = () =>{
    document.body.classList.toggle("dark");
  }

  return (<>
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <img src="https://image.flaticon.com/icons/png/512/3336/3336086.png" alt="india" className="w-10 h-10 logo" />
          <span className="ml-3 text-xl text-yellow-500">75 Years Special</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-yellow-500">Home</Link>
          <Link to="/freedom" className="mr-5 hover:text-yellow-500">Freedom Fighters</Link>
          <Link to="/india" className="mr-5 hover:text-yellow-500">India</Link>
        </nav>
        <button onClick={toggleTheme} className="inline-flex items-center text-white bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0">Switch Theme
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  </>)
}

export default Header;