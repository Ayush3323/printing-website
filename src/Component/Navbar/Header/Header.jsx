import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SearchDropdown from "./SearchDropdown";
import SignInDropdown from "./SignInDropdown";
import NavBar from "./Navbar";
import { BsFolder2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function Header() {
  const location = useLocation();

  const [showSearch, setShowSearch] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const searchRef = useRef(null);

  // Close dropdowns on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowSearch(false);
    setShowSignIn(false);
  }, [location.pathname]);

  // Close search on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="max-w-450 mx-auto max-h-48 h-full block items-center px-4 bg-white">
      <div className="max-w-450 mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rotate-45"></div>
      <span className="text-4xl font-bold text-gray-900">printdoot</span>
    </div>
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-8">
      <div ref={searchRef} className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          onFocus={() => setShowSearch(true)}
          className="w-full border rounded-lg py-2 pl-4 pr-10 focus:outline-none"
        />
        <svg className="w-5 h-5 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
        </svg>
        {showSearch && <SearchDropdown />}
      </div>
    </div>
        

        {/* Right Nav */}
        <nav className="hidden sm:flex items-center justify-evenly gap-6 font-semibold text-[14px] text-gray-700">
          <Link to="/help"><div className="flex flex-row items-center pb-1  gap-1">
            <IoMdHelpCircleOutline className="text-xl"/>
          <div className="pb-1 border-b-2 border-transparent hover:border-gray-400">
        <p className="font-medium ">Help is here</p>
        <p className="text-xs text-gray-500">02522-669393</p>
      </div>
      </div>
      </Link>
          
          <Link to="/projects">
          <div className="flex flex-row items-center pb-1 border-b-2 border-transparent hover:border-gray-400 gap-1"><BsFolder2 className="text-lg" />
          <span className="">My Projects</span>
          </div></Link>

          <Link to="/favorites">
      <div className="flex flex-row items-center pb-1 border-b-2 border-transparent hover:border-gray-400 gap-1"><FaRegHeart className="text-lg" />
          <span className="">My Favorites</span>
          </div>
          </Link>
          
  
          {/* Sign In with Hover Dropdown */}
          <div
            onMouseEnter={() => setShowSignIn(true)}
            onMouseLeave={() => setShowSignIn(false)}
            className="relative"
          >
            <Link
              to="/signin"
            >
              <div className="pb-1 border-b-2 border-transparent hover:border-gray-400 flex items-center gap-1">
              <LuUserRound className="text-lg"/>
              <span>Sign in</span>
              </div>
            </Link>

            {showSignIn && <SignInDropdown />}
          </div>

        <Link to="/cart">
        <div className="flex flex-row items-center pb-1 border-b-2 border-transparent hover:border-gray-400 gap-1"><MdOutlineShoppingBag className="text-lg"/>
          <span className="">Cart</span>
          </div>
          
          </Link>
        </nav>
      </div>
      <NavBar></NavBar>
    </header>

  );
}

