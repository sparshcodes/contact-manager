import React, { useState, useEffect } from "react";

function useForm(setValues, values, submitData, setErrorMessage) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({ name: "" });

  useEffect(() => {
    setErrorMessage && setErrorMessage("");
    if (Object.keys(errors).length === 0 && isSubmit) {
      submitData();
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmit(true);
  };

  //validation check
  const validateInfo = (values) => {
    let errors = {};

    // space after a-z is to allow spaces in name
    const nameRegex = /^([A-Za-z ]{3,16})$/;
    const emailRegex =
      /^([A-Za-z0-9\.\-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    const phoneRegex = /^[0-9]{4,14}$/;

    // validation for email👇
    if (values.email) {
      if (!emailRegex.test(values.email)) {
        errors.email = "Email Is Invalid";
      }
    }
    // validation for name👇
    if (values.name) {
      if (!values.name.trim()) {
        errors.name = "Name Can't Be Blank";
      } else if (!nameRegex.test(values.name)) {
        errors.name = "Name Should Contain 3-16 Characters";
      }
    }

    // validation for phone👇
    if (values.phone) {
      if (!values.phone.trim()) {
        errors.phone = "Phone Number Can't Be Blank";
      } else if (!phoneRegex.test(values.phone)) {
        errors.phone = "Phone Number Should Contain 4-14 Characters";
      }
    }

    // validation for password👇
    if (values.password) {
      if (values.password.length < 6) {
        errors.password = "Password should be atleast 6 characters";
      }
    }
    return errors;
  };
  //validation check end

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleSubmit, handleInput, errors };
}

export default useForm;
