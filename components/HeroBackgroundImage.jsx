import React from "react";

const HeroBackgroundImage = () => {
  return (
    <React.Fragment>
      <div
        className="hero sm:h-[600px] h-[300px] "
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-full h-full flex items-center sm:items-end container mx-auto text-neutral-content ">
          <div className="max-w-2xl mb-0  sm:mb-28 text-white ">
            <h1 className="mx-10 sm:mx-0 mb-5 text-lg sm:text-3xl font-semibold antialiased tracking-wide text-center sm:text-left">
              Join the Fibre Revolution with Africa&apos;s finest full Fibre
              infrastructure
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroBackgroundImage;
