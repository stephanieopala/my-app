import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pb-6 px-3 sm:px-20">
      <div className="flex justify-between">
        <p className="text-primary">WALLET</p>
        <ul className="hidden sm:flex gap-x-4">
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary font-semibold'} to="/">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary font-semibold'} to="/signup">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary font-semibold'} to="/signin">
              Sign In
            </NavLink>
          </li>
        </ul>
        <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <p className="hover:text-primary cursor-pointer">Menu</p>
        </div>
      </div>
      <ul className={isOpen ? "flex flex-col sm:hidden" : "hidden"}>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary font-semibold'} to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary font-semibold'} to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary font-semibold'} to="/signin">
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar