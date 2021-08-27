import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="w-full absolute text-gray-600 body-font align-bottom">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="w-10 h-10" src="https://image.flaticon.com/icons/png/512/3336/3336086.png" alt="logo" />
            <span class="ml-3 text-xl">75 Years Special</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Independence Day —
      <a href="https://github.com/Saarthak-Slathia" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Saarthak-Slathia</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a target="_blank" href="https://codepen.io/Saarthak-Slathia" class="text-gray-500">
              <img src="https://image.flaticon.com/icons/png/512/2111/2111341.png" className="w-5 h-5" alt="codepen" />
            </a>
            <a target="_blank" href="https://github.com/Saarthak-Slathia" class="ml-3 text-gray-500">
              <img src="https://image.flaticon.com/icons/png/512/919/919847.png" className="w-5 h-5" alt="github" />
            </a>
            <a href="https://replit.com/@Slathia-21" class="ml-3 text-gray-500">
             <img src="https://image.flaticon.com/icons/png/512/340/340976.png" className="w-5 h-5" alt="replit" />
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer;