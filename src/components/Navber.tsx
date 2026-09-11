import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-4 relative">
   

      <div className="flex justify-between items-center">
        
      
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none order-1"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

     
        <div className="order-2 md:order-1 flex justify-center md:justify-start">
          <img src={Logo} alt="Logo" className="w-32 md:w-40" />
        </div>

       
        <ul className="hidden md:flex gap-8 font-medium text-[#475569] md:order-2">
          <li className="text-[#DB2777] font-semibold cursor-pointer">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        
        <div className="order-3 flex items-center gap-3">
    
          <button className="text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full px-4 py-1.5 md:px-6 md:py-2.5 text-sm md:text-base font-medium shadow-sm hover:opacity-90 ">
            Sing In
          </button>
          
          <button className="text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full px-4 py-1.5 md:px-6 md:py-2.5 text-sm md:text-base font-medium shadow-sm hover:opacity-90 ">
            Sign Up
          </button>
          
        </div>

      </div>

     
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-b border-gray-100">
          <ul className="flex flex-col gap-4 font-medium text-[#475569]">
            <li className="text-[#DB2777] font-semibold">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li className="pt-2 border-t">Sign In</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;