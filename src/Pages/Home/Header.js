import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accesstoken");
  };
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="z-50 sticky top-0">
      <div class="navbar bg-amber-300">
        <div class="flex-1">
          <Link to="/" className="w-16">
            <img className="rounded-2xl" src={logo} alt="" />
          </Link>
          <Link to="/" className="text-white ml-3">
            Home
          </Link>
        </div>
        <div class="flex-none gap-2">
          <ul className="flex gap-3 text-white">
            {user ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              ""
            )}

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {user ? (
              <li>
                <button className="mr-3" onClick={logout}>
                  <span>{user.displayName}</span>Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="mr-3">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
