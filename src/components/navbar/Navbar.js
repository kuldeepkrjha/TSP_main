import React from "react";

import logo from "../../logo.png";

const Navbar = ({ setShowLogin, setShowRegister }) => {
  return (
    <header className="z-[50] fixed top-0 w-full bg-gray-800 border-b border-transparent">
      <div className="hidden lg:block">
        <div className="px-20 flex h-16 items-center max-w-[88rem] mx-auto">
          <div className="mr-4 hidden md:flex">
            <a
              class="flex px-7 items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
              href="/"
            >
              <div className="text-sm text-emerald-500 relative z-20">
                <img
                  src={logo}
                  alt="Government of Chhattisgarh"
                  decoding="async"
                  className="sm:h-10 sm:w-20 md:h-[55px] md:w-17 flex "
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-black dark:text-white md:text-lg font-sans">
                  Government of Chhattisgarh
                </h1>
              </div>
            </a>

            <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
              <a
                className="transition-colors  hover:text-white text-gray-400 hover:font-bold hidden sm:flex md:text-xs space-x-1"
                href="/financial"
              >
                {" "}
                Financial Solutions
              </a>
              <a
                className="transition-colors hover:font-bold hover:text-white text-gray-400 hidden sm:flex md:text-xs space-x-1"
                href="https://tribal.cg.gov.in/services"
              >
                {" "}
                Support Schemes
              </a>
              <a
                className="transition-colors hover:font-bold hover:text-white md:text-xs text-gray-400 hidden sm:flex space-x-1"
                href="http://tsplearningprog.s3-website.ap-south-1.amazonaws.com"
              >
                {" "}
                Literacy Program
              </a>
              <a
                className="transition-colors hover:font-bold hover:text-white md:text-xs text-gray-400 hidden sm:flex space-x-1"
                href="http://tspsuraj.s3-website.ap-south-1.amazonaws.com"
              >
                {" "}
                Carbon Credit
              </a>
            </nav>
            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end md:gap-2 md:px-10">
              <div className="ml-auto flex justify-end items-center px-10 space-x-4"></div>
              <button
                className="sm:flex relative hidden justify-start items-center md:text-xs text-sm shadow-lg hover:shadow-slate-500 font-bold hover:font-black py-2 w-fit border border-transparent px-6 rounded-xl bg-white dark:bg-brand hover:border-gray-900 hover:border-solid"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <button
                className="sm:flex relative hidden justify-start items-center md:text-xs text-sm shadow-lg hover:shadow-slate-500 font-bold hover:font-black py-2 w-fit border border-transparent px-4 rounded-xl bg-white dark:bg-brand hover:border-gray-900 hover:border-solid"
                onClick={() => setShowRegister(true)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 w-full"></div>


      {/* <div class="block lg:hidden">
        <div class="flex justify-between  items-center w-full rounded-md px-4 py-4">
          <a class="flex items-center gap-1.5" href="/">
            <img
              src={logo}
              alt="Government of Chhattisgarh"
              decoding="async"
              className="h-6 w-6 object-contain flex "
            />
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-black dark:text-white h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
          <div class="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-3  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800">
            <div class="flex items-center justify-between w-full px-4">
              <a class="flex items-center gap-1" href="/">
                <img
                  src={logo}
                  alt="Government of Chhattisgarh"
                  decoding="async"
                  className="h-6 w-6 object-contain flex "
                />
              </a>
              <div class="flex items-center justify-center">
                <button class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 px-3 flex items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-sun h-4 w-4  dark:text-neutral-500 text-neutral-500"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  <span class="sr-only">Toggle theme</span>
                </button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="h-8 w-8 text-black dark:text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
                </svg>
              </div>
            </div>
            <div class="flex flex-col items-start justify-start gap-[14px] px-5">
              <a class="relative flex space-x-2 items-center" href="/financial">
                <span class="block text-[26px] text-black dark:text-white">
                  Financial Solutions
                </span>
              </a>

              <a
                class="relative flex space-x-2 items-center"
                href="https://tribal.cg.gov.in/services"
              >
                <span class="block text-[26px] text-black dark:text-white">
                  Support Schemes
                </span>
              </a>

              <a
                class="relative flex space-x-2 items-center"
                href="http://tsplearningprog.s3-website.ap-south-1.amazonaws.com"
              >
                <span class="block text-[26px] text-black dark:text-white">
                  Literacy Program
                </span>
              </a>

              <a
                class="relative"
                href="http://tspsuraj.s3-website.ap-south-1.amazonaws.com"
              >
                <span class="block text-[26px] text-black dark:text-white">
                  Carbon Credit
                </span>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
