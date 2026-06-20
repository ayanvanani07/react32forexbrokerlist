import React from "react";
import BlackLogo from "../../assets/logo/full-logo-dark.svg";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="py-[20px] fixed left-0 left-0 z-[999] w-full bg-[rgba(255,255,255,0.85)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1640px] px-16 mx-auto max-tab:px-5 max-mobile:px-4">
        <div className="flex justify-between items-center">
          <div className="max-w-[175px] w-full block">
            <img
              src={BlackLogo}
              alt="Black Logo"
              className="w-auto h-8 object-contain"
            />
          </div>
          <nav className="bg-white flex gap-2 items-center rounded-full p-1.5 max-laptop:hidden">
            <a
              href="-"
              className="text-base font-geist font-medium bg-[#A8DD15] px-5 py-2 rounded-full cursor-pointer"
            >
              Home
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              Browse
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              Brokers
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 "
            >
              Tools
              <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              Forex CRM
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              Advertise
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              News
            </a>
            <a
              href="-"
              className="text-base font-geist font-medium hover:bg-[#A8DD15] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              Expo
            </a>
          </nav>
          <div className="cursor-pointer py-2.5 px-7 bg-black font-medium font-geist text-white rounded-full">
            Sign In
          </div>
        </div>
      </div>
    </header>
  );
}
