import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);


  useEffect(() => {
    if (textRef.current && imgRef.current) {
    gsap.to(textRef.current, {
      duration: 3,
      text: {
        value: "Web Developer",
        delimiter: ""
      }
    });

    gsap.to(imgRef.current, {
       scale: 1.1, // Membuat gambar sedikit membesar
        duration: 1.5,
        ease: "power1.inOut"
    });
  }
  }, []);
  return(
    <>
      <div className="section pt-44 justify-center items-center" ref={containerRef}>
        <div>
          <img ref={imgRef} src="./img/myfoto.jpg" alt="My Foto" className="w-[150px] h-[150px] object-cover rounded-full border border-solid border-blue-400" />
        </div>
        <div className="text-center">
            <h1 className="text-2xl font-semibold ">Nur Arini</h1>
            <h1 className="text-4xl font-bold" ref={textRef}></h1>
            <p className="px-6 sm:px-52">Currently focused on Web Development, I'm also keen on exploring UX/UI Design and AI. I love learning new things and am always open to new opportunities.</p>
            <div className="flex gap-2 pt-3 justify-center">
              <button className="py-1.5 px-4 bg-pink-500 rounded-md"><a href="https://instagram.com/nrrarn_"><FaInstagram/></a></button>
              <button className="py-1.5 px-4 bg-gray-700 rounded-md"><a href="https://github.com/nrrarnn"><FaGithub /></a></button>
              <button className="py-1.5 px-4 bg-blue-600 rounded-md"><a href="https://www.linkedin.com/in/nur-arini/"><FaLinkedin /></a></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;