import { useState } from "react";
import { hamburger } from "../assets/icons"; // Add 'close' icon
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white shadow-md">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="max-lg:block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={isOpen ? close : hamburger}
              alt="menu icon"
              width={25}
              height={25}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 max-lg:block">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-500"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;