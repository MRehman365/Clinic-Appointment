import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function MobileNavBar() {
  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white">
      <div className="flex justify-around items-center py-2">
        <Link to='/mainhome'><NavItem icon={<AiFillHome />} label="Home" /></Link>
        <Link to='/doctorlist'><NavItem icon={<FiSearch />} label="Search" /></Link>
        <Link to='/digestion'><NavItem icon={<BsCalendar3 />} label="Schedule" /></Link>
        <Link to='/details'><NavItem icon={<CgProfile />} label="Profile" /></Link>
      </div>
    </nav>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl text-gray-400">{icon}</div>
      <span className="text-xs mt-1 text-gray-400">{label}</span>
    </div>
  );
}
