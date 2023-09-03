import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="firstbutton">Shop Now</button>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;