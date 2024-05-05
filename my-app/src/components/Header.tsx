"use client";

import { useEffect, useState } from "react";
import Nav from "./header/Nav";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((value) => !value);
    console.log("Valor trocado", isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 768 && isOpen) setIsOpen(false);
    if (window.innerWidth > 768 && !isOpen) setIsOpen(true);
  };

  const handleHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    handleHeader();
    window.addEventListener("scroll", handleHeader);
    if (window.innerWidth > 768 && !isOpen) setIsOpen(true);
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
        header ? "bg-[#082887]" : "bg-transparent backdrop-blur-lg"
      } fixed top-0 z-50 ease-linear duration-500`}
    >
      <div className="container max-md:flex-col flex justify-between m-auto px-4 py-5 relative">
        <div>
          <a href="/" className="text-xl font-bold text-white">
            Virtual<span className="text-[#0CF25D]">Link</span>
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-2.5 sm:top-4  max-sm:top-3 text-white hover:text-lime-400 duration-500"
          aria-label="Menu Hamburguer"
        >
          <span>{isOpen ? <IoClose size={36} /> : <IoMenu size={36} />}</span>
        </button>
        <Nav toggleOpen={isOpen} />
      </div>
    </header>
  );
}
