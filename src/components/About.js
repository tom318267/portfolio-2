import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-black w-screen py-12 px-8 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl md:text-4xl font-body mb-8 text-blue">
        About Me
      </h2>
      <div className="text-white font-open md:text-xl">
        <p>
          My name is Tom Rago, I am a self-taught web developer. I started
          learning about three years ago. I was stuck in a dead-end job and
          wasn’t very happy with where my career was going. I searched and
          searched on the internet to find a career I could learn on own. There
          were decent jobs that I found, but nothing I was interested in.
        </p>
        <br />
        <p>
          Then web development caught my eye. I was always interested in
          technology and the web, so I figured I would give it a shot. After
          reading up on others that have switched careers to web development, I
          found that it was possible. It was inspiring. If I put in the hard
          work and tried my best, I could finally have a career I was proud of
          and make a great living for myself.
        </p>
        <br />
        <p>
          I have taken courses online such as Udemy, Codeacademy, and Treehouse.
          I found that Udemy was the best learning tool for me and was not
          expensive at all. They have great teachers, and if you have any
          questions about the course or run into any problems, they will respond
          rather swiftly. I have learned HTML, CSS, Javascript, React, Redux,
          Nodejs, and many more libraries/frameworks. I enjoy creating websites
          and would love to make my new career. All I need is someone to give me
          a chance and I know I will become a great asset to any company willing
          to give me the opportunity.
        </p>
      </div>
    </div>
  );
};

export default About;
