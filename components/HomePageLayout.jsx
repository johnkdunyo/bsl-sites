import Image from "next/image";
import React from "react";

const navItems = [
  { name: "Home" },
  { name: "Partners" },
  { name: "About" },
  { name: "About" },
  { name: "Activities" },
  { name: "Events" },
];

const HomePageLayout = ({ children }) => {
  return (
    <div className="drawer bg-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar  */}
        <div className="w-full navbar py-0 px-0 bg-white border-t-4 border-blue-600">
          <div className="w-full flex justify-between px-0 sm:px-6 ">
            <div className="flex  items-center ">
              <Image
                src="/assets/img/spectrumfibre.png"
                layout="intrinsic"
                height="75px"
                width="240px"
                className="sm:h-[75px] h-[50px]"
                alt="spectrumfibre"
              />
              <hr className="h-10 border border-gray-300" />
              <Image
                src="/assets/img/main-logo-stack.png"
                layout="intrinsic"
                height="45px"
                width="80px"
                alt="spectrumfibre"
              />
            </div>
            <div className="flex-none hidden md:block ">
              <button className="block py-2 pr-4 pl-3 font-semibold text-white lg:text-gray-600  hover:text-bslpink ">
                <svg
                  className="stroke-white text-gray-900 font-extrabold md:stroke-gray-900"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            {/* visible only on mobile */}
            <div className="flex-none md:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        {/* second navabr */}
        <div className="hidden md:block w-full navbar bg-sky-100">
          <div className="w-full grid place-content-center">
            <ul className="menu menu-horizontal text-black ">
              {navItems.map((navItem, i) => (
                <li key={i}>
                  <a className="font-semibold rounded-md">{navItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Page content here  */}
        {children}
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-[70%] bg-base-100 ">
          {navItems.map((navItem, i) => (
            <li key={i}>
              <a>{navItem.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePageLayout;
