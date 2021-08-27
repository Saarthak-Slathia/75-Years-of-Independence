import React from "react";

const Hero = () => {
  const lightTheme = () => {
    document.body.classList.remove("dark");
  }
  const darkTheme = () => {
    document.body.classList.add("dark");
  }
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Celebrating India's <br />
              <span className="text-yellow-500 border-b-2 border-yellow-500">75 Years of Independence</span>
      </h1>
            <p class="mb-8 leading-relaxed para text-justify">Independence Day is celebrated annually on 15 August as a national holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947, the day when the provisions of the 1947 Indian Independence Act, which transferred legislative sovereignty to the Indian Constituent Assembly, came into effect. </p>
            <div class="flex justify-center">
              <button onClick={darkTheme} class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Dark Theme</button>
              <button onClick={lightTheme} class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Light Theme</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded w-96" alt="hero" src="https://image.flaticon.com/icons/png/512/317/317544.png" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;