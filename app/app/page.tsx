"use client";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar/>
      </div>
      <div className="flex-grow">
        <Info/>
      </div>
      <div className="relative bottom-0 w-full ">
        <Footer/>
      </div>
    </div>
  );
}
