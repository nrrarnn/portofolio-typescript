import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <>
      <div className="bg-slate-900 h-screen">
        <Navbar/>
        <HeroSection/>
      </div>
    </>
  );
}