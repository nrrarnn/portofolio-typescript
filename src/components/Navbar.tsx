import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
        navbarRef.current,
        {
          opacity: 0,  // Mulai dari opacity 0
          y: -30,      // Mulai dari sedikit di atas posisinya
        },
        {
          opacity: 1,  // Akhirnya menjadi opacity 1
          y: 0,        // Akhirnya menjadi posisi normalnya
          duration: 1, // Durasi animasi 1 detik
          ease: "power2.out", // Efek easing yang lebih halus
        }
      );
  }, []);

  return (
    <>
      <header className="flex justify-center font-poppins z-[9999]"  ref={navbarRef}>
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

export default Navbar;