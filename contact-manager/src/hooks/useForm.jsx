import React, { useState, useEffect } from "react";
import { setDoc, collection, doc } from "firebase/firestore";
import { userAuth } from "../Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import db from "../firebase/firebaseConfig";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  imgURL: "",
  category: "",
  facebookURL: "",
  instagramURL: "",
  linkedInURL: "",
  twitterURL: "",
  githubURL: "",
};

function useForm() {
  const [values, setValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({ name: "" });
  const { user: userData } = userAuth();
  const navigateTo = useNavigate();
  console.log(values);

  useEffect(() => {
    console.log("useForm run");
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log("all correct");
      // addData();
    }
  }, [errors]);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmit(true);
  };

  //validation check
  const validateInfo = (values) => {
    let errors = {};
    let { name, email, phone } = values;

    const nameRegex = /^[A-Za-z]{3,16}$/;
    const emailRegex =
      /^([A-Za-z0-9\.\-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    const phoneRegex = /^[0-9]{4,14}$/;

    // validation for name👇
    if (!name.trim()) {
      errors.name = "Name Can't Be Blank";
    } else if (!nameRegex.test(name)) {
      errors.name = "Name Should Contain 3-16 Characters";
    }

    // validation for email👇
    if (!emailRegex.test(email)) {
      errors.email = "Email Is Invalid";
    }

    // validation for phone👇
    if (!phone.trim()) {
      errors.phone = "Phone Number Can't Be Blank";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone Number Should Contain 4-14 Characters";
    }

    return errors;
  };
  //validation check end

  const addData = async () => {
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

    const collectionRef = collection(db, "users", userData.uid, "contact");
    await setDoc(doc(collectionRef), user);
    navigateTo("/home");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleSubmit, handleInput, values, errors };
}

export default useForm;
