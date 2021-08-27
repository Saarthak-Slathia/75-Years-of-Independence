import React from "react";
import { Link } from "react-router-dom";

const Freedom = () => {
  return(
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="shadow-2xl lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">India's <span className="text-yellow-500 border-b-2 border-yellow-500">Freedom Fighters</span> have a big role in India's Independence</h1>
            <p className="mb-8 leading-relaxed">The Indian independence movement consisted of efforts by individuals and organizations from a wide spectrum of society to obtain political independence from the British, French and Portuguese rule through the use of a many of methods. This is a list of individuals who notably campaigned against or are considered to have campaigned against colonial rule on the Indian sub-continent.
            <br /><br />
            Post-independence, the term "freedom fighter" was officially recognized by the Indian government for those who took part in the movement; people in this category (which can also include dependent family members) receive pensions and other benefits such as special railway counters.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"><Link to="/">Back</Link></button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><Link to="/india">India</Link></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Freedom;