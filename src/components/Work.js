import React, { useEffect } from "react";
import Aos from "aos";

const Work = ({ img, name, info, url }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="work-flex text-white">
      <div
        data-aos="fade-up"
        className="work-items flex gap-5 w-full font-open mb-20 text-sm md:text-lg items-center"
      >
        <a
          className="w-1/2 object-contain cursor-pointer"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <img className="rounded-md" src={img} alt="img" />
        </a>

        <p className="text-xs md:text-xl w-1/2">{info}</p>
      </div>
    </div>
  );
};

export default Work;
