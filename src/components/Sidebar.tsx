"use client";
import { Home, Package, BarChart, List } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "Store", icon: Home, href: "/store" },
  { name: "SKU", icon: Package, href: "/sku" },
  { name: "Planning", icon: List, href: "/planning" },
  { name: "Charts", icon: BarChart, href: "/charts" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { status } = useSession();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (status !== "authenticated") {
      e.preventDefault();
      router.push("/signin");
    }
  };

  return (
    <div className="w-[180px] bg-white h-screen shadow-lg p-4 flex flex-col">
      <div className="flex items-center mb-6">
        <Image
          src="/svg/gsynergy_logo.svg"
          alt="GSynergy Logo"
          width={150}
          height={50}
        />
      </div>

      <nav className="space-y-1">
        {menuItems.map(({ name, icon: Icon, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              onClick={(e) => handleClick(e)}
              className={`flex items-center space-x-3 p-2 rounded-lg transition ${
                isActive ? "bg-gray-200" : "hover:bg-gray-200"
              } ${
                status !== "authenticated"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              aria-disabled={status !== "authenticated"}
            >
              <Icon
                size={20}
                className={status !== "authenticated" ? "text-gray-400" : ""}
              />
              <span
                className={`text-lg font-medium ${
                  status !== "authenticated" ? "text-gray-400" : ""
                }`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
