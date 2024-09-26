import React from "react";
import resumeImg from "../assets/project-images/resume.png";
import githubImg from "../assets/project-images/github-task.png";
import facebookImg from "../assets/project-images/facebook.png";
import whatsappImg from "../assets/project-images/whatsapp.png";
import instagramImg from "../assets/project-images/instagram.png";
import gpayImg from "../assets/project-images/gpay.png";

const Work = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-5" id="work">
        <div className="pb-8">
          <p className="text-4xl mb-3 font-bold primary-color">Work</p>
          <p className="text-gray-400">Check out of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
            <img src={resumeImg} alt="" layout="fill" objectFit="cover" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex float-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center ">
                <a href="https://dineshdevelope.github.io/Resume/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
            <img src={githubImg} alt="" layout="fill" objectFit="cover" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex float-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center ">
                <a href="https://dineshdevelope.github.io/intern-git-profile-app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
            <img src={facebookImg} alt="" layout="fill" objectFit="cover" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex float-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center ">
                <a href="https://dineshdevelope.github.io/Facebook-Login-Page/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
            <img src={whatsappImg} alt="" layout="fill" objectFit="cover" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex float-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center ">
                <a href="https://dineshdevelope.github.io/WhatsApp-UI/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
            <img src={instagramImg} alt="" layout="fill" objectFit="cover" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex float-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center ">
                <a href="https://dineshdevelope.github.io/Instagram-UI-tailwind/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
            <img src={gpayImg} alt="" layout="fill" objectFit="cover" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex float-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center ">
                <a href="https://dineshdevelope.github.io/Google-pay_UI/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
