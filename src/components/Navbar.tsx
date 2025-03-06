"use client";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-6 mb-4 border-b-1 bg-white">
      <span></span>
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Data Viewer App
      </h1>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center focus:outline-none cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <User size={24} />
          <ChevronDown size={24} className={`${isDropdownOpen && "rotate-180"}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 border-[1px]">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
