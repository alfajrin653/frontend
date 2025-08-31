import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed  top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Wash Station</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <HashLink smooth to="#" className="hover:text-blue-500">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#about" className="hover:text-blue-500">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#Service" className="hover:text-blue-500">
              Service
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#corporate" className="hover:text-blue-500">
              Corporate
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#rate" className="hover:text-blue-500">
              Review
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact" className="hover:text-blue-500">
              Contact
            </HashLink>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Smooth Transition) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-6 p-6">
          <li>
            <HashLink smooth to="#" className="hover:text-blue-500" onClick={closeMenu}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#about" className="hover:text-blue-500" onClick={closeMenu}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#Service" className="hover:text-blue-500" onClick={closeMenu}>
              Service
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#corporate" className="hover:text-blue-500" onClick={closeMenu}>
              Corporate
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#rate" className="hover:text-blue-500" onClick={closeMenu}>
              Review
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact" className="hover:text-blue-500" onClick={closeMenu}>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
