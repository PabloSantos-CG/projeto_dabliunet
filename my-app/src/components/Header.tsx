"use client";

import { useEffect, useState } from "react";
import Nav from "./header/Nav";

export default function Header() {
  const [header, setHeader] = useState(false);
  
  const handleHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true)
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleHeader)
    
  },[]);

  return (
    <header
      className={`w-full ${
        header ? "fixed bg-[#082887]" : "bg-[#02091D]"
      } top-0 z-50 ease-linear duration-500`}
    >
      <div className="container flex justify-between m-auto px-4 py-5">
        <div>
          <a href="/" className="text-xl font-bold text-white">
            Virtual<span className="text-lime-400">Link</span>
          </a>
        </div>

        <Nav />
      </div>
    </header>
  );
}
