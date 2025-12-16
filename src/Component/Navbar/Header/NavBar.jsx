import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMenuData } from "../services/menuApi.js";
import MegaMenu from "./MegaMenu";

const NavBar = () => {
  const [menu, setMenu] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const location = useLocation();

  // Fetch menu once
  useEffect(() => {
    fetchMenuData().then(setMenu);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveId(null);
  }, [location.pathname]);

  return (
    <nav className=" max-w-450  w-full relative">
      <ul className="max-w-450 mx-auto px-6 lg:flex hidden  justify-between items-center gap-6 font-semibold text-[14px]">
        {menu.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
            className={`py-3 cursor-pointer text-center ${
              activeId === item.id ? "" : ""
            }`}
          >
            {item.label}

            {activeId === item.id && (
              <MegaMenu sections={item.sections} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
