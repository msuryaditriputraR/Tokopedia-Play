import { FiUser, FiLogOut } from "react-icons/fi";
import { googleLogout } from "@react-oauth/google";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MenuProfile = () => {
  const { setUser } = useContext(UserContext);

  const handleLogOut = () => {
    googleLogout();
    setUser({});
    localStorage.removeItem("user");
  };

  const menus = [
    { icon: <FiUser />, text: "Profile", handleClick: () => {} },
    { icon: <FiLogOut />, text: "Log Out", handleClick: handleLogOut },
  ];

  return (
    <div className="absolute bottom-[-250%] right-0 z-30 w-28 rounded-md border border-slate-300 bg-white px-2 shadow-lg">
      <ul>
        {menus.map((menu, index) => (
          <li
            className={`flex cursor-pointer items-center gap-x-2 py-3 transition-all hover:font-semibold ${
              index === menus.length - 1
                ? "border-t border-slate-300 pt-2"
                : null
            }`}
            key={index}
            onClick={menu.handleClick}
          >
            {menu.icon}
            {menu.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuProfile;
