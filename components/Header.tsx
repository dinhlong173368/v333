"use client";

import { ChevronDown, X, Menu } from "lucide-react";
export default function Header() {
  const navItems = [
    { name: "Home", href: "#home", active: true },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Pricing", href: "#pricing" },
  ];
  return (
    <header className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="w-40">
          <img src="./logo_header.png" className="w-full object-cover" alt="" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-10 py-3 shadow-lg">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-5 px-10 py-2 text-sm lg:text-2xl text-[#093FB4] font-medium transition-colors duration-300 ${
                    item.active
                      ? "border-[#083DA5] border-b-2"
                      : "hover:border-[#083DA5] hover:border-b-2"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <button className="bg-white text-tech-blue-dark hover:bg-gray-50 text-[20px] transition-all duration-300 hover:scale-105 text-[#093FB4]  px-12 py-5 rounded-full font-bold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)]">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
