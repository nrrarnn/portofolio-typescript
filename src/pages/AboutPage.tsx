import About from "../components/About";
import Certificate from "../components/Certificate";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function AboutPage(){
  return(
    <>
      <div className="bg-slate-900 h-full">
        <Navbar/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Certificate/>
      </div>
    </>
  )
}