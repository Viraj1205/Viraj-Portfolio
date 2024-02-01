// Social.js
import React from 'react';

const Social = () => {
  return (
    <div className="mt-20 py-4 px-2 fixed flex justify-between bg-black w-full text-white lg:hidden md:hidden">
      <a
        href="https://www.linkedin.com/in/viraj-shinde-829970222/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 px-3 py-2 rounded-full text-white hover:scale-110 duration-300"
      >
        LinkedIn
      </a>
      <a
        href="mailto:virajshinde1298@gmail.com"
        className="bg-blue-500 px-3 py-2 rounded-full text-white hover:scale-110 duration-300"
      >
        Email
      </a>
      <a
        href="https://github.com/Viraj1205"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 px-3 py-2 rounded-full text-white hover:scale-110 duration-300"
      >
        GitHub
      </a>
      <a
        href="./Viraj_s_Resume (2).pdf"
        target="_blank"
        download={true}
        className="bg-blue-500 px-3 py-2 rounded-full text-white hover:scale-110 duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Social;
