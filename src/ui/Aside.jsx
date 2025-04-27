import { FaAppleAlt, FaHome, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiBarbellFill } from "react-icons/pi";
import { NavLink, useLocation } from "react-router";

const asideLinks = [
  { path: "/home", icon: FaHome },
  { path: "/meals", icon: FaAppleAlt },
  { path: "/workouts", icon: PiBarbellFill },
  { path: "/profile", icon: FaUser },
  { path: "/settings", icon: IoMdSettings },
];

export default function Aside() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname.startsWith(path)
      ? "bg-green-450 text-white"
      : "text-gray-400";
  }

  return (
    <div className="bg-gray-900 row-start-2 py-8">
      <ul className="flex flex-col items-center gap-8">
        {asideLinks.map((link) => (
          <li
            className={`w-10 transition-colors duration-200 flex items-center  justify-center aspect-square rounded-full ${isActive(
              link.path
            )}`}
            key={link.path}
          >
            <NavLink to={link.path}>
              <link.icon className="text-2xl text-current" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
