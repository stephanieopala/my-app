import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-3 sm:px-20">
      <div className="flex justify-between">
        <p className="text-primary"><RouterLink to="/">WALLET</RouterLink></p>
        <ul className="hidden sm:flex gap-x-4">
          <li><RouterLink className='hover:text-primary font-semibold' to="/">Home</RouterLink></li>
          <li><RouterLink className='hover:text-primary font-semibold' to="/signup">Sign Up</RouterLink></li>
          <li>
            <RouterLink className='hover:text-primary font-semibold' to="/signin">Sign In</RouterLink>
          </li>
        </ul>
        <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <p>Menu</p>
        </div>
      </div>
      <ul className={isOpen ? "flex flex-col sm:hidden" : "hidden"}>
        <li><RouterLink className='hover:text-primary font-semibold' to="/">Home</RouterLink></li>
        <li><RouterLink className='hover:text-primary font-semibold' to="/signup">Sign Up</RouterLink></li>
        <li>
          <RouterLink className='hover:text-primary font-semibold' to="/signin">Sign In</RouterLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar