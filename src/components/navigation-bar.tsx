import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-md p-4 border boder-white/10 before:content-[' '] before:absolute before:insert-0 border border-white/30 shadow-lg">
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="">
            Home
          </a>
        </li>
        <li>
          <a href="/certification" className="">
            Certificates
          </a>
        </li>
        <li>
          <a href="/projects" className="">
            Projects
          </a>
        </li>
        <li>
          <a href="/about" className="">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
