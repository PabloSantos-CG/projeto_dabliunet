"use client";

import { useEffect, useState } from "react";
import Nav from "./header/Nav";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen((value) => !value);
    console.log("Valor trocado", isOpen);
  };

  const handleResize = () => {
    // if (window.innerWidth < 768 && isOpen) setIsOpen(false);
    // if (window.innerWidth > 768 && !isOpen) setIsOpen(true);
  };

  const handleHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeader);
    // if (window.innerWidth > 768 && !isOpen) setIsOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header
      className={`w-full ${
        header ? "fixed bg-[#082887]" : "sticky bg-[#02091D]"
      } top-0 z-50 ease-linear duration-500`}
    >
      <div className="container flex justify-between m-auto px-4 py-5">
        <div>
          <a href="/" className="text-xl font-bold text-white">
            Virtual<span className="text-[#0CF25D]">Link</span>
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-2 sm:top-5  max-sm:top-3 text-white"
        >
          <span>{isOpen ? <IoClose size={36} /> : <IoMenu size={36} />}</span>
        </button>
        <Nav toggleOpen={isOpen} />
      </div>
    </header>
  );
}
