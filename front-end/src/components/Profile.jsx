import { useContext, useState } from "react";
import MenuProfile from "./MenuProfile";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <article
      className="relative order-1 flex items-center gap-x-2"
      onClick={() => setShowMenu(!showMenu)}
    >
      <p className="text-sm sm:text-base">{user.given_name}</p>
      <img
        src={user.picture}
        alt={user.name}
        className="w-[35px] rounded-full shadow-md sm:w-[45px]"
      />

      {showMenu && <MenuProfile />}
    </article>
  );
};

export default Profile;
