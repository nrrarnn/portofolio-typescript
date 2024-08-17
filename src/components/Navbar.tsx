import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="flex justify-center font-poppins">
        <nav className="fixed mt-3 top-0  py-5 bg-[#232946] text-white flex justify-center items-center shadow-lg z-50 max-w-[400px] w-full mx-auto rounded-full px-8 border border-slate-500">
          <div className="flex gap-5 list-none font-normal text-md">
            <Link to={'/'} className={isActive('/') ? "font-bold text-blue-500" : "hover:font-bold hover:text-blue-500"}>Home</Link>
            <Link to={'/about'} className={isActive('/about') ? "font-bold text-blue-500" : "hover:font-bold hover:text-blue-500"}>About</Link>
            <Link to={'/project'} className={isActive('/project') ? "font-bold text-blue-500" : "hover:font-bold hover:text-blue-500"}>Project</Link>
            <Link to={'/contact'} className={isActive('/contact') ? "font-bold text-blue-500" : "hover:font-bold hover:text-blue-500"}>Contact</Link>
          </div>
          </nav>
      </header>
    </>
  );
}