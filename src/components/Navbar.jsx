import React from "react";

const Navbar = () => {
  return (
    <div className="bg-Model3  bgbody">
      <div className="flexbody">
        <div className="w-2/5 sm:w-[15%] md:w-[20%] lg:w-[15%]  mt-4">
          <a className="font-bold" href="/">
            <svg
              class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <ul className="sm:flex items-center hidden mt-4 font-medium sm:space-x-6 mx-auto">
            <li className="btn">Model S</li>
            <li className="btn">Model 3</li>
            <li className="btn">Model X</li>
            <li className="btn">Model Y</li>
            <li className="btn">Solar Roof</li>
            <li className="btn">Solar Panel</li>
          </ul>
        </div>
        <div>
          <ul className="lg:flex hidden items-center mt-4 font-medium space-x-6 mx-auto">
            <li>Shop</li>
            <li>Acccount</li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mt-12 justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold text-center mb-2">Model 3</h1>
          <p className="">
            Order Online for{" "}
            <span className="underline underline-offset-2">
              Touchless Delivery
            </span>
          </p>
        </div>
      </div>
      <div className="sm:mt-72 mt-[18rem] flex-col justify-center  flex space-y-3 sm:space-y-0 sm:flex-row">
        <button className="rounded sm:px-20 py-2  bg-[#393c41] text-white">
          Custom Order
        </button>
        <button className="sm:ml-4 font-medium rounded sm:px-16 py-2 text-[#393c41] bg-white">
          Existing Inventory
        </button>
      </div>
    </div>
  );
};

export default Navbar;
