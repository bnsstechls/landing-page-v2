"use client";

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileNavOpen(false);
    }
  };

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileNavOpen]);

  return (
    <section>
      <nav className="py-3 bg-white/5 border-b border-white/20 backdrop-blur z-50 fixed top-0 left-0 right-0">
        <div className="container px-4 mx-auto flex items-center relative">
          {/* Logo */}
          <a
            href="#"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            LOGISETU
          </a>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur rounded-md"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path 
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5ZM2.5 10C2.5 9.72386 2.72386 9.5 3 9.5H17C17.2761 9.5 17.5 9.72386 17.5 10C17.5 10.2761 17.2761 10.5 17 10.5H3C2.72386 10.5 2.5 10.2761 2.5 10ZM3 14.5C2.72386 14.5 2.5 14.7239 2.5 15C2.5 15.2761 2.72386 15.5 3 15.5H17C17.2761 15.5 17.5 15.2761 17.5 15C17.5 14.7239 17.2761 14.5 17 14.5H3Z" 
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-12">
            <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>Our Mission</a></li>
            <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('advantages'); }}>Advantages</a></li>
            <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('business-model'); }}>Business Model</a></li>
            <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Our Team</a></li>
          </ul>

          {/* Right-side Buttons */}
          <div className="hidden lg:flex items-center ml-auto">
            <Link href="/signIn" className="nav-item mr-9">Sign In</Link>
            <a
              href="#"
              className="relative group inline-block py-2.5 px-3 text-sm font-semibold text-black bg-white rounded-md shadow-lg"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              <span className="flex items-center">
                Contact Us
                <MdKeyboardArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
          <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-black opacity-50"></div>
          <nav className="relative w-full h-full bg-black/30 backdrop-blur-2xl border-r overflow-y-auto">
            <div className="p-4 flex items-center">
              <h1 className="text-lg font-semibold">LOGISETU</h1>
              <button onClick={() => setMobileNavOpen(false)} className="ml-auto text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="py-6 px-4">
              <ul className="space-y-2">
                <li><a href="#" className="block py-3 px-4 hover:bg-white/10 rounded-lg" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                <li><a href="#" className="block py-3 px-4 hover:bg-white/10 rounded-lg" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>Our Mission</a></li>
                <li><a href="#" className="block py-3 px-4 hover:bg-white/10 rounded-lg" onClick={(e) => { e.preventDefault(); scrollToSection('advantages'); }}>Advantages</a></li>
                <li><a href="#" className="block py-3 px-4 hover:bg-white/10 rounded-lg" onClick={(e) => { e.preventDefault(); scrollToSection('business-model'); }}>Business Model</a></li>
                <li><a href="#" className="block py-3 px-4 hover:bg-white/10 rounded-lg" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Our Team</a></li>
              </ul>

              <div className="mt-6 space-y-2">
                <Link href="/signIn" className="block py-3 px-4 text-white bg-transparent border border-white/20 rounded-lg text-center" onClick={() => setMobileNavOpen(false)}>Sign In</Link>
                <a href="#" className="block py-3 px-4 text-black bg-white rounded-lg text-center font-semibold" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a>
              </div>
            </div>

            {/* Moved to the bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
              <p className="text-zinc-400 text-sm">We'd love to hear from you</p>
              <a href="mailto:support@logisetu.com" className="text-white text-sm font-semibold">support@logisetu.com</a>
            </div>
          </nav>
        </div>
      )}
    </section>
  );
};

export default Navbar;
