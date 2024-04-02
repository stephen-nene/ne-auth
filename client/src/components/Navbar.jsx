import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaMoon, FaRegSun, FaSchool } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { setDarkMode } from "../assets/store/actions/appAction";

function Navbar({ loggedin = !true }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigationRef = useRef();
  const darkMode = useSelector(state => state.app.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setToggleMenu(false); // Close the menu when a link is clicked
  };

  return (
    <div
    ref={navigationRef}
      className={`fixed top-0 w-full z-10 duration-100 ease-in-out ${darkMode ? 'bg-sky-500 text-black' : 'bg-sky-950 text-white'}  bg-opacity- backdrop-blur-xl
   ${!isScrolled && !toggleMenu ? "bg-transparen" : "  "}`}
    >
      <nav>
        <div className="max-w-9xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-5">
              {/* logo */}
              <div>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="flex gap-1 font-bold  hover:text-yellow-500 items-center "
                >
                  <FaSchool className="h-6 w-6 text-primary" />
                  <span>Logo</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden  lg:flex items-center gap-8 ">
                <Link to="/" className="" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link className="" to="/shop" onClick={handleLinkClick}>Shop</Link>
                <Link className="" to="/dash" onClick={handleLinkClick}>Dashboard</Link>
                <Link to="/profile" className="" onClick={handleLinkClick}>Profile</Link>
                <button onClick={handleLinkClick}>
                  {!loggedin ? <Link to='/dash'>Dashboard</Link> : <Link to='/login'>Get-Started</Link>}
                </button>
              </div>
            </div>
            {/* secondary */}
            <div className={`flex gap-4 ${!darkMode ? 'text-white' : 'text-black'}`}>
              <div className="flex items-center">
                <div className={` hover:text-yellow-500  `} onClick={() => dispatch(setDarkMode(!darkMode))}>
                  {darkMode ? <FaMoon size={25} /> : <FaRegSun size={25} />}
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center ">
                <div
                  className={`cursor-pointer  hover:text-yellow-500  `}
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  {!toggleMenu ? <FaBarsStaggered size={25} /> : <IoClose className=' text-3xl' />}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed  w-full ${darkMode ? 'bg-sky-500' : 'bg-sky-950'} duration-100 ease-in-out bg-opacity- backdrop-blur-xl overflow-hidden flex flex-col lg:hidden gap-12   ${!toggleMenu ? "h-0" : "h-"
            }`}
        >
          <div className="pl-16 ">
            <div className="flex flex-col gap-8 font-bold tracking-wider items-start m-3">
              <Link to="/" className="" onClick={handleLinkClick}>
                Home
              </Link>
              <Link to="/shop" onClick={handleLinkClick}>Shop</Link>
              <Link to="/profile" onClick={handleLinkClick}>Profile</Link>
              <button onClick={handleLinkClick}>
                {loggedin ? <Link to="/dash">Dashboard</Link> : <Link to="/login">Get-Started</Link>}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
