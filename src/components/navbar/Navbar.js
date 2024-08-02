import React from "react";

import logo from "../../logo.png";
import { FloatingNavDemo } from "../ui/floating Navbar for mobile device/FloatingNavDemo";

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
                <h1 className=" text-white dark:text-white md:text-base lg:text-lg font-sans">
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

      <div className="bg-white hidden h-1 w-full"></div>

      {/* for mobile phone: floating navbar menu */}
      <div className="lg:hidden">
        <FloatingNavDemo />
        
      </div>

      <div className="block lg:hidden">
        <div class="flex justify-between  items-center w-full rounded-md px-4 py-4">
          <a class="flex items-center gap-1.5" href="/">
            <img
              src={logo}
              alt="Government of Chhattisgarh"
              decoding="async"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain flex "
            />

            <div className="flex flex-col">
              <h1 className=" text-white dark:text-white sm:text-lg font-bold font-sans">
                Government of Chhattisgarh
              </h1>
            </div>
          </a>
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end md:gap-2 md:px-10">
            <div className="ml-auto flex justify-end items-center px-10 space-x-4"></div>
            <button
              className="sm:flex relative  justify-start items-center  text-sm shadow-lg hover:shadow-slate-500 font-bold hover:font-black sm:py-2 py-1 w-fit border border-transparent px-6 rounded-xl bg-white dark:bg-brand hover:border-gray-900 hover:border-solid"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
            <button
              className="sm:flex relative  justify-start items-center md:text text-sm shadow-lg hover:shadow-slate-500 font-bold hover:font-black sm:py-2 py-1 w-fit border border-transparent px-4 rounded-xl bg-white dark:bg-brand hover:border-gray-900 hover:border-solid"
              onClick={() => setShowRegister(true)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 w-full"></div>
    </header>
  );
};

export default Navbar;

// <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end md:gap-2 md:px-10">
//               <div className="ml-auto flex justify-end items-center px-10 space-x-4"></div>
//               <button
//                 className="sm:flex relative hidden justify-start items-center md:text-xs text-sm shadow-lg hover:shadow-slate-500 font-bold hover:font-black py-2 w-fit border border-transparent px-6 rounded-xl bg-white dark:bg-brand hover:border-gray-900 hover:border-solid"
//                 onClick={() => setShowLogin(true)}
//               >
//                 Login
//               </button>
//               <button
//                 className="sm:flex relative hidden justify-start items-center md:text-xs text-sm shadow-lg hover:shadow-slate-500 font-bold hover:font-black py-2 w-fit border border-transparent px-4 rounded-xl bg-white dark:bg-brand hover:border-gray-900 hover:border-solid"
//                 onClick={() => setShowRegister(true)}
//               >
//                 Register
//               </button>
//             </div>
