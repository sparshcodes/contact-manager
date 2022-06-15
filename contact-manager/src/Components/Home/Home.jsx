import React from "react";
import "./Home.scss";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import ContactsList from "../ContactsList/ContactsList";
import { userAuth } from "../../Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
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
    <>
      <div className="add-contact-wrapper">
        {user && `welcome ${user.email}`}
        <button onClick={handleLogOut}>Logout</button>
        <p>Manage All Your Contact Details At One Place 😎</p>
        <Link to="/addForm" className="btn add-btn">
          add new contact{" "}
          <MdOutlineAddCircle style={{ marginLeft: "8px", fontSize: "2em" }} />
        </Link>
      </div>
      <ContactsList />
    </>
  );
}

export default Home;
