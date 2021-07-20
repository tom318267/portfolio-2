import React from "react";

const Home = () => {
  return (
    <div className="Home bg-computer flex bg-cover bg-center w-screen h-screen overflow-hidden">
      <div className="bg-overlay w-screen h-screen">
        <div className="title-container h-screen md:w-3/4 md:text-center text-white px-12 flex flex-col justify-center items-center my-0 mx-auto font-body animate__animated animate__bounceInUp">
          <h1 className="text-4xl md:text-6xl mb-2">
            &lt; Hello, my name is Tom. I am a Web Developer! /&gt;
          </h1>
          <p className="text-white font-extralight text-lg md:text-2xl mb-5 font-open">
            I specialize in front-end and back-end development.
          </p>
          <button className="hvr-bounce-in px-8 py-2 w-full md:w-1/3 md:text-xl rounded-3xl text-black font-semibold font-open bg-blue  active:bg-hoverBlue">
            <a href="#my-work">My Work</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
