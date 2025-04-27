import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router";
import { avatar, logo } from "../assets";

export default function Header() {
  return (
    <div className="bg-gray-900 pl-5 flex items-center justify-between col-span-2 px-8 py-4">
      <Link to="home">
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="The Track Fit Logo" />
          <span className="text-xl">The Track Fit</span>
        </div>
      </Link>
      <div className="relative">
        <HiMagnifyingGlass className="text-gray-400 text-2xl absolute top-1/2 -translate-y-1/2 left-4" />
        <input
          className="py-2 pl-14 w-100 px-4 rounded-3xl border-1 border-gray-700"
          type="text"
          placeholder="Search for"
        />
      </div>
      <div>
        <Link className="flex items-center gap-3" to="/profile">
          <img className="w-10 h-10" src={avatar} alt="avatar placeholder" />
          <div className="flex flex-col justify-center pb-1 leading-4">
            <span className="text-lg">Shadcn</span>
            <span className="text-green-550">Admin</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
