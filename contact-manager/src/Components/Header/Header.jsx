import React from "react";
import "./Header.scss";
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
      console.log(e.message);
    }
  };

  return (
    <header className="header">
      <Link className="logo" to={"/home"}>
        <img src="../images/cmLogo.png" alt="contact manager logo" />
      </Link>
      {user && (
        <div className="profile-details">
          <img
            className="profile-img"
            src="../images/user_profile.png"
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
