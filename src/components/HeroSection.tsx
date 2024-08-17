import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection(){
  return(
    <>
      <div className="section pt-44 justify-center items-center">
        <div>
          <img src="./img/myfoto.jpg" alt="My Foto" className="w-[150px] h-[150px] object-cover rounded-full border border-solid border-blue-400" />
        </div>
        <div className="text-center">
            <h1 className="text-2xl font-semibold ">Nur Arini</h1>
            <h1 className="text-4xl font-bold">Web Developer</h1>
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