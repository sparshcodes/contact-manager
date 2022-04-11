import React from "react";
import "./Home.scss";
import { MdOutlineAddCircle } from "react-icons/md";
import ContactsList from "../ContactsList/ContactsList";

function Home() {
  return (
    <>
      <header className="header">
        <img src="../images/cmLogo.png" alt="contact manager logo" />
      </header>
      <div className="add-contact-wrapper">
        <p>Manage All Your Contact Details At One Place</p>
        <a href="#" className="add-btn">
          add new contact <MdOutlineAddCircle style={{marginLeft:"8px",fontSize:"2em"}} />
        </a>
      </div>
      <ContactsList/>
    </>
  );
}

export default Home;
