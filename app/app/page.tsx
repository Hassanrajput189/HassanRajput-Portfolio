import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <div className="flex flex-col h-screen">
    <div>
    <Navbar/>
    </div>
    <div className="my-8 flex-grow">
    <Info/>
    </div>
    <div>
    <Footer/>
    </div>
   </div>
  );
}
