import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SearchDropdown from "./SearchDropdown";
import SignInDropdown from "./SignInDropdown";
import AccountDropdown from "./AccountDropdown";
import NavBar from "./NavBar";
import userService from "../../../services/userService";
import { BsFolder2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function Header() {
  const location = useLocation();

  const [showSearch, setShowSearch] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const searchRef = useRef(null);

  // Check authentication status
  const checkAuth = () => {
    const isAuth = userService.isAuthenticated();
    setIsAuthenticated(isAuth);
    if (isAuth) {
      const storedUser = localStorage.getItem('username');
      setUsername(storedUser || 'Account');
    }
  };

  useEffect(() => {
    checkAuth();
  }, [location.pathname]); // Re-check on route change

  // Close dropdowns on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowSearch(false);
    setShowSignIn(false);
    setShowAccount(false);
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

  const handleLogout = () => {
    userService.logout();
    setIsAuthenticated(false);
    setShowAccount(false);
    setUsername("");
    window.location.href = '/login';
  };

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const query = formData.get('search')?.trim();
                if (query) {
                  window.location.href = `/search?q=${encodeURIComponent(query)}`;
                }
              }}
              className="w-full"
            >
              <input
                type="text"
                name="search"
                placeholder="Search"
                onFocus={() => setShowSearch(true)}
                className="w-full border rounded-lg py-2 pl-4 pr-10 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5 cursor-pointer"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                </svg>
              </button>
            </form>
            {showSearch && <SearchDropdown />}
          </div>
        </div>


        {/* Right Nav */}
        <nav className="hidden sm:flex items-center justify-evenly gap-6 font-semibold text-[14px] text-gray-700">
          <Link to="/help"><div className="flex flex-row items-center pb-1  gap-1">
            <IoMdHelpCircleOutline className="text-xl" />
            <div className="pb-1 border-b-2 border-transparent hover:border-gray-400">
              <p className="font-medium ">Help is here</p>
              <p className="text-xs text-gray-500">02522-669393</p>
            </div>
          </div>
          </Link>

          <Link to="/account/designs">
            <div className="flex flex-row items-center pb-1 border-b-2 border-transparent hover:border-gray-400 gap-1"><BsFolder2 className="text-lg" />
              <span className="">My Projects</span>
            </div></Link>

          <Link to="/favorites">
            <div className="flex flex-row items-center pb-1 border-b-2 border-transparent hover:border-gray-400 gap-1"><FaRegHeart className="text-lg" />
              <span className="">My Favorites</span>
            </div>
          </Link>


          {/* Sign In / Account */}
          {isAuthenticated ? (
            <div
              className="relative"
              onMouseEnter={() => setShowAccount(true)}
              onMouseLeave={() => setShowAccount(false)}
            >
              <Link to="/account">
                <div className="pb-1 border-b-2 border-transparent hover:border-gray-400 flex items-center gap-1">
                  <LuUserRound className="text-lg" />
                  <span>Hi, {username}</span>
                </div>
              </Link>
              {showAccount && <AccountDropdown onLogout={handleLogout} />}
            </div>
          ) : (
            <div
              onMouseEnter={() => setShowSignIn(true)}
              onMouseLeave={() => setShowSignIn(false)}
              className="relative"
            >
              <Link to="/login">
                <div className="pb-1 border-b-2 border-transparent hover:border-gray-400 flex items-center gap-1">
                  <LuUserRound className="text-lg" />
                  <span>Sign in</span>
                </div>
              </Link>
              {showSignIn && <SignInDropdown />}
            </div>
          )}

          <Link to="/cart">
            <div className="flex flex-row items-center pb-1 border-b-2 border-transparent hover:border-gray-400 gap-1"><MdOutlineShoppingBag className="text-lg" />
              <span className="">Cart</span>
            </div>

          </Link>
        </nav>
      </div>
      <NavBar></NavBar>
    </header>

  );
}

