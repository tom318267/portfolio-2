import React from "react";
import { DATA } from "../info";
import Work from "./Work";

const MyWork = () => {
  return (
    <div
      id="my-work"
      className="bg-black w-screen py-12 px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <h2 className="text-blue text-3xl md:text-4xl font-body mb-16 md:mb-20">
        My Work
      </h2>
      {DATA.map(({ img, name, info, url }) => (
        <Work
          className="work-item"
          key={name}
          name={name}
          img={img}
          info={info}
          url={url}
        />
      ))}
    </div>
  );
};

export default MyWork;
