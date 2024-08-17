import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  linkCode: string;
  linkWeb: string;
}

export default function CardProject({ title, description, image, linkCode, linkWeb }: CardProjectProps){
  return(
    <>
      <div className="w-full flex flex-wrap bg-slate-700 rounded-lg p-3 font-poppins">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img src={`./img/${image}.png`} alt="" className="rounded-md w-full object-cover" />
        </div>
        <div className="w-full sm:w-1/2 p-5">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{description}</p>
          
          <div className="flex gap-4 pt-4">
            <button className="py-1 px-3 bg-blue-500 font-semibold rounded-lg"><a href={`${linkCode}`} className="flex gap-2 items-center"><FaGithub/>repo</a></button>
            <button className="py-1 px-3 bg-blue-500 font-semibold rounded-lg"><a href={`${linkWeb}`} className="flex gap-2 items-center"><TbWorld/>web</a></button>
          </div>
        </div>
      </div>
    </>
  )
}