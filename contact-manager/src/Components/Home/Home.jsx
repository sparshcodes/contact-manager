import React from "react";
import "./Home.scss";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import ContactsList from "../ContactsList/ContactsList";
import { userAuth } from "../../Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="add-contact-wrapper">
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
