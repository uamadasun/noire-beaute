import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="
             text-xs text-white text-center
             fixed
             inset-x-0
             bottom-0
             p-4
             mt-10 footer bg-black"
      >
        Copyright &copy; 2023 Noire Beaute by J. Developed and Designed by <Link href="https://uchenna.io" target="_blank"><span className="hover:text-noire-gold font-bold">uchenna.io</span>.</Link>
      </footer>
    </div>
  );
};

export default Footer;
