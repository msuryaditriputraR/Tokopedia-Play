import { useContext, useState } from "react";
import MenuProfile from "./MenuProfile";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <article
      className="relative flex items-center gap-x-2"
      onClick={() => setShowMenu(!showMenu)}
    >
      <p>{user.given_name}</p>
      <img
        src={user.picture}
        alt={user.name}
        width={45}
        className="rounded-full shadow-md"
      />

      {showMenu && <MenuProfile />}
    </article>
  );
};

export default Profile;
