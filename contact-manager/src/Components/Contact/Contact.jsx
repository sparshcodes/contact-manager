import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import "./Contact.scss";
import db from "../../firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

function Contact(props) {
  const { contactDetail } = props;

  const {
    name,
    email,
    phone,
    imgURL,
    category,
    facebookURL,
    instagramURL,
    linkedInURL,
    twitterURL,
    githubURL,
    id,
  } = contactDetail;

  const deleteHandler = async () => {
    const docRef = doc(db, "contacts", id);
    const deleteRequest = await deleteDoc(docRef);
  };

  return (
    <div className="contact">
      <img
        src={imgURL}
        onError={(e) => {
          e.target.src = "./images/defaultImg.png";
          e.target.onerror = null;
        }}
        alt="contact image"
      />
      <div className="user-details">
        <div className="general-details">
          <span className="name">name: {name}</span>
          <span className="email">email: {email}</span>
          <span className="phone">phone: {phone}</span>
        </div>
        <div className="social-media-details">
          {facebookURL && (
            <a href={facebookURL}>
              <FaFacebookF />
            </a>
          )}
          <a href={instagramURL}>
            <FaInstagram />
          </a>
          <a href={linkedInURL}>
            <FaLinkedinIn />
          </a>
          <a href={twitterURL}>
            <FaTwitter />
          </a>
          <a href={githubURL}>
            <FaGithub />
          </a>
        </div>
      </div>
      <span className="category">{category}</span>
      <div className="btn-group">
        <button
          className="delete-btn modify-btn"
          onClick={(e) => deleteHandler(e, id)}
        >
          <AiFillDelete />
        </button>
        <Link
          to={`/editContact/${contactDetail.id}`}
          state={contactDetail}
          className="edit-btn modify-btn"
        >
          <MdEdit />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
