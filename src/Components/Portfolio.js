import React from "react";
import netflix from "../assets/portfolio/Netflix.png";
import youtube from "../assets/portfolio/Youtube.png";
import weather from "../assets/portfolio/weather-app.png";
import password from "../assets/portfolio/password-generator.png";
import tictaktoe from "../assets/portfolio/tic-tac-toe.png";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflix,
      demo : "",
      code : "https://github.com/Viraj1205/netflix-react",
    },
    {
      id: 2,
      src: youtube,
      demo : "youtube-clone-gamma-blue.vercel.app",
      code : "https://github.com/Viraj1205/youtube-clone",
    },
    {
      id: 3,
      src: weather,
      demo : "weather-app-project-beta.vercel.app",
      code : "https://github.com/Viraj1205/weatherAppProject",
    },
    {
      id: 4,
      src: password,
      demo : "password-generator-lemon-three.vercel.app",
      code : "https://github.com/Viraj1205/passwordGenerator",
    },
    {
      id: 5,
      src: tictaktoe,
      demo : "tictaktoe-pied.vercel.app",
      code : "https://github.com/Viraj1205/tictaktoe",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a target="blank" href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a target="blank" href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;