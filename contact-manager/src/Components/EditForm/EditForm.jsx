import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./EditForm.scss";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import db from "../../firebase/firebaseConfig";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

function EditForm() {
  const location = useLocation();
  const contactData = location.state;
  console.log(contactData);
  let navigateTo = useNavigate();
  const [values, setValues] = useState(contactData);

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
  } = contactData;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData();
  };

  const updateData = () => {
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
    } = values;

    const user = {
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
    };

    const docRef = doc(db, "contacts", id);
    setDoc(docRef, user);
    navigateTo("/");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <h2 className="section-heading">Edit Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group general-details">
          <h3 className="group-heading">General Details :</h3>
          <div className="inputs-wrapper">
            <div className="input-container">
              <input
                required
                type="text"
                value={values.name}
                onChange={handleInput}
                name="name"
                id="name"
                placeholder="  "
              />
              <label htmlFor="name">name</label>
            </div>
            <div className="input-container">
              <input
                required
                type="email"
                value={values.email}
                onChange={handleInput}
                name="email"
                id="email"
                placeholder="  "
              />
              <label htmlFor="email">email</label>
            </div>
            <div className="input-container">
              <input
                required
                type="tel"
                value={values.phone}
                onChange={handleInput}
                name="phone"
                id="number"
                placeholder="  "
              />
              <label htmlFor="number">Phone No.</label>
            </div>
            <div className="input-container">
              <input
                required
                type="url"
                value={values.imgURL}
                onChange={handleInput}
                name="imgURL"
                id="url"
                placeholder="  "
              />
              <label htmlFor="url">image URL</label>
            </div>
            <div className="input-container">
              <select
                defaultValue={category}
                name="category"
                onChange={handleInput}
                id="category"
                required
              >
                <option value="" disabled>
                  Choose a category
                </option>
                <option value="friends">friends</option>
                <option value="relative">relative</option>
                <option value="colleague">colleague</option>
                <option value="others">others</option>
              </select>
              <div className="arrow-container">
                <BsChevronDown style={{ fontSize: "2em", color: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="input-group sm-accounts">
          <h3 className="group-heading">Social media accounts :</h3>
          <div className="inputs-wrapper">
            <div className="input-container">
              <input
                type="url"
                value={values.facebookURL}
                onChange={handleInput}
                name="facebookURL"
                id="url"
                placeholder="  "
              />
              <label htmlFor="url">facebook URL</label>
              <div className="icon-container">
                <FaFacebookF style={{ fontSize: "1.8em", color: "#fff" }} />
              </div>
            </div>
            <div className="input-container">
              <input
                type="url"
                value={values.instagramURL}
                onChange={handleInput}
                name="instagramURL"
                id="url"
                placeholder="  "
              />
              <label htmlFor="url">Instagram URL</label>
              <div className="icon-container">
                <FaInstagram style={{ fontSize: "1.8em", color: "#fff" }} />
              </div>
            </div>
            <div className="input-container">
              <input
                type="url"
                value={values.linkedInURL}
                onChange={handleInput}
                name="linkedInURL"
                id="url"
                placeholder="  "
              />
              <label htmlFor="url">linkedIn URL</label>
              <div className="icon-container">
                <FaLinkedinIn style={{ fontSize: "1.8em", color: "#fff" }} />
              </div>
            </div>
            <div className="input-container">
              <input
                type="url"
                value={values.twitterURL}
                onChange={handleInput}
                name="twitterURL"
                id="url"
                placeholder="  "
              />
              <label htmlFor="url">twitter URL</label>
              <div className="icon-container">
                <FaTwitter style={{ fontSize: "1.8em", color: "#fff" }} />
              </div>
            </div>
            <div className="input-container">
              <input
                type="url"
                value={values.githubURL}
                onChange={handleInput}
                name="githubURL"
                id="url"
                placeholder="  "
              />
              <label htmlFor="url">github URL</label>
              <div className="icon-container">
                <FaGithub style={{ fontSize: "1.8em", color: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn primary">
            Update
          </button>
          <Link to="/" className="btn secondary">
            cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditForm;