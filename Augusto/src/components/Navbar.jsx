import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import menuIcon from "../assets/menu.png";
import CloseIcon from "../assets/close.webp";
import login from "../assets/login.png";

const routes = [
  { to: "/Home", text: "Home" },
  { to: "/Cities", text: "Cities" },
];

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [shouldShowNavLink, setShouldShowNavLink] = useState(true);

  useEffect(() => {
    if (!isMenuVisible) {
      const timer = setTimeout(() => setShouldShowNavLink(true), 400);
      return () => clearTimeout(timer);
    }
  }, [isMenuVisible]);

  const toggleMenu = () => {
    setShouldShowNavLink(!isMenuVisible);
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="fixed top-4 left-2 w-full">
      <nav className="flex justify-center">
        <div className="absolute top-2 left-3">
          <button onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu icon" className="w-8 h-8" />
          </button>
        </div>
        {shouldShowNavLink && !isMenuVisible && (
          <div className="transition-opacity duration-800 delay-500">
            <NavLink
              to={routes[0].to}
              className="ps-3 font-bold font-mono text-black text-4xl"
            >
              MyTinerary
            </NavLink>
          </div>
        )}
      </nav>

      <div
        className={`fixed inset-0 bg-opacity-90 flex items-start justify-center pt-4 z-40 transition-transform duration-500 ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          <img
            src={CloseIcon}
            alt="Close icon"
            className=" md:w-10 md:h-10 w-6 h-6"
          />
        </button>
        <nav className="flex items-center md:space-x-16  space-x-8 mt-0">
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className={({ isActive }) =>
                `text-black font-extrabold text-lg font-mono rounded ${
                  isActive ? "bg-white/20" : ""
                }`
              }
            >
              {route.text}
            </NavLink>
          ))}
          <img src={login} alt="Login icon" className="w-12 h-12" />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
