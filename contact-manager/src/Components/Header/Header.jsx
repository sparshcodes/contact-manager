import React from "react";
import "./Header.scss";
import cmLogo from "../../assets/cmLogo.png";
import userProfile from "../../assets/user_profile.png";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../Contexts/UserAuthContext";

function Header() {
  const { user, logOut } = userAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <header className="header">
      <Link className="logo" to={"/home"}>
        <img src={cmLogo} alt="contact manager logo" />
      </Link>
      {user && (
        <div className="profile-details">
          <img
            className="profile-img"
            src={userProfile}
            alt="user profile image"
          />
          <div className="profile-tooltip">
            <span>
              Logged In As
              <br /> {user.email}
            </span>
            <button onClick={handleLogOut}>Logout</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
