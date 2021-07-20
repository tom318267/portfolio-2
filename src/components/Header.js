import React from "react";

const Header = () => {
  return (
    <div className="absolute w-full z-10 flex justify-between font-body text-white">
      <div>
        <h3 className="my-1 mx-2 md:text-xl cursor-pointer">Tom Rago</h3>
      </div>
      <div className="text-xs m-3 hidden md:flex md:text-lg mr-8">
        <a
          href="#about"
          className="hvr-underline-from-center cursor-pointer mr-8"
        >
          About Me
        </a>
        <a href="#my-work" className="hvr-underline-from-center cursor-pointer">
          My Work
        </a>
      </div>
    </div>
  );
};

export default Header;
