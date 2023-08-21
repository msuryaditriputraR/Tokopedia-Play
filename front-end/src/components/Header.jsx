import { useContext } from "react";
import Search from "./Search";
import { PageContext } from "../context/PageContext";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Profile from "./Profile";
import { UserContext } from "../context/UserContext";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  const { isDetailPage } = useContext(PageContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <header
      className={`section fixed left-0 top-0 z-50 flex w-full flex-wrap items-center justify-between rounded-b-2xl bg-green-200 bg-opacity-5 bg-clip-padding shadow backdrop-blur-xl backdrop-filter lg:h-16 lg:flex-nowrap ${
        !isDetailPage ? "h-28" : "h-16"
      }`}
    >
      <div className="order-1 flex items-center gap-x-2 sm:gap-x-4">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[100px] drop-shadow-md sm:w-[150px]"
        />
        {isDetailPage && (
          <Link to={"/"}>
            <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-green-500 shadow-md sm:h-[35px] sm:w-[35px]">
              <BsArrowLeft color="white" className="text-base sm:text-xl" />
            </span>
          </Link>
        )}
      </div>
      {!isDetailPage && <Search />}

      <div className="order-1 flex items-center gap-x-2 sm:gap-x-4">
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GCLIENT_ID}>
          {Object.keys(user).length > 0 ? (
            <Profile />
          ) : (
            <div className="order-1">
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
                context="signin"
                shape="circle"
                text="signin"
                width="100"
              />
            </div>
          )}
        </GoogleOAuthProvider>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
