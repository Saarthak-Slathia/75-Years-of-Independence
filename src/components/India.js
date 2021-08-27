import React from "react";
import { Link } from "react-router-dom";

const India = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-3xl mb-2 text-gray-900"><span className="text-yellow-500 text-3xl">India's</span> struggle was not easy!</h1>
              <div class="leading-relaxed">The people of India had to go through many phases of struggle to gain independence on <span className="text-yellow-500 text-lg border-b-2 border-yellow-500">15 August 1947</span></div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">1.3B+</h2>
              <p class="leading-relaxed">Population</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">7th</h2>
              <p class="leading-relaxed">Largest Land Area</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">2nd</h2>
              <p class="leading-relaxed">Largest in Population</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">5th</h2>
              <p class="leading-relaxed">Largest Economy</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full" src="https://images.pexels.com/photos/6753741/pexels-photo-6753741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="stats" />
          </div>
        </div>
      </section>
    </>
  )
}

export default India;