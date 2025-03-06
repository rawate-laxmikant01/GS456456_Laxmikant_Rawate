import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 mb-4 border-b-1 bg-white">
      <span></span>
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Data Viewer App
      </h1>
      <User
        className="text-gray-500 hover:text-gray-700 cursor-pointer"
        size={24}
      />
    </div>
  );
};

export default Navbar;
