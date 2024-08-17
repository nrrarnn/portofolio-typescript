import About from "../components/About";
import Education from "../components/Education";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function AboutPage(){
  return(
    <>
      <div className="bg-slate-900 h-full">
        <Navbar/>
        <About/>
        <Education/>
        <Skills/>
      </div>
    </>
  )
}