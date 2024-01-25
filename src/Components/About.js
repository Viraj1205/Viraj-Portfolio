import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-16">
          
        I am a skilled front-end developer specializing in HTML, CSS, and JavaScript, with a focus on React.js and Redux Toolkit. My expertise extends to crafting dynamic and responsive web applications, ensuring seamless user experiences. Leveraging my proficiency in Tailwind CSS, I design visually appealing interfaces that strike the perfect balance between aesthetics and functionality. With a keen eye for detail and a passion for creating compelling digital experiences, I bring a comprehensive skill set to the forefront, consistently delivering innovative solutions that elevate the user interface and overall design of web projects.
        </p>

    
      </div>
    </div>
  );
};

export default About;