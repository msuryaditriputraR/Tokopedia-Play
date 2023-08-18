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
    <header
      className={`section fixed left-0 top-0 z-50 flex w-full flex-wrap items-center justify-between rounded-b-2xl bg-green-200 bg-opacity-5 bg-clip-padding shadow backdrop-blur-xl backdrop-filter xl:h-16 xl:flex-nowrap ${
        !isDetailPage ? "h-28" : "h-16"
      }`}
    >
      <div className="order-1 flex items-center gap-x-4">
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
            />
          </div>
        )}
      </GoogleOAuthProvider>
    </header>
  );
};

export default Header;
