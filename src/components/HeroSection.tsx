import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current ) {
    gsap.to(textRef.current, {
      duration: 5,
      text: {
        value: "Full Stack Developer",
        delimiter: ""
      }
    });
  }
  }, []);
  return (
    <>
      <div className="section pt-44 justify-center items-center" ref={containerRef}>
        <div>
          <img src="./img/foto2.jpg" alt="My Foto" className="w-[150px] h-[150px] object-cover rounded-full border border-solid border-blue-400" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-blue-300  ">Hi, I'm Arin</h1>
          <h1 className="text-4xl font-bold" ref={textRef}></h1>
          <p className="px-6 sm:px-52 pt-2">
            A developer with web and mobile expertise, ready to help your business create a consistent digital experience across all platforms, ensuring seamless performance, intuitive interfaces, and scalable architecture tailored to your
            business goals.
          </p>
          <div className="flex gap-2 pt-3 justify-center">
            <button className="py-1.5 px-4 bg-pink-500 rounded-md">
              <a href="https://instagram.com/ryn_code">
                <FaInstagram />
              </a>
            </button>
            <button className="py-1.5 px-4 bg-gray-700 rounded-md">
              <a href="https://github.com/nrrarnn">
                <FaGithub />
              </a>
            </button>
            <button className="py-1.5 px-4 bg-blue-600 rounded-md">
              <a href="https://www.linkedin.com/in/nur-arini/">
                <FaLinkedin />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;