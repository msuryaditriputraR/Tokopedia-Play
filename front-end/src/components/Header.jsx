import { useContext } from "react";
import Search from "./Search";
import { PageContext } from "../context/PageContext";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Profile from "./Profile";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { isDetailPage } = useContext(PageContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between rounded-b-2xl bg-green-200 bg-opacity-5 bg-clip-padding px-14 shadow backdrop-blur-xl backdrop-filter">
      <div className="flex items-center gap-x-4">
        <img src="/logo.png" alt="logo" className="w-[150px] drop-shadow-md" />
        {isDetailPage && (
          <Link to={"/"}>
            <span className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-green-500 shadow-md">
              <BsArrowLeft color="white" className="text-xl" />
            </span>
          </Link>
        )}
      </div>
      {!isDetailPage && <Search />}

      <GoogleOAuthProvider clientId={import.meta.env.VITE_GCLIENT_ID}>
        {Object.keys(user).length > 0 ? (
          <Profile />
        ) : (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const u = jwt_decode(credentialResponse.credential);
              setUser(u);
              localStorage.setItem("user", JSON.stringify(u));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        )}
      </GoogleOAuthProvider>
    </header>
  );
};

export default Header;
