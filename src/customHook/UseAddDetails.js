import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDetailes, updateDetails } from "../redux/actions/Actions";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function UseAddDetails() {
  const dispatch = useDispatch();



  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [phoneNumError, setPhoneNumError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [flag, setFlag] = useState(false);

  const validateFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length === "") {
      setFirstNameError(true);
    } else {
      let checkFirstName = String(e.target.value)
        .toLowerCase()
        .match(/[a-zA-Z\-]+$/);
      if (!checkFirstName) {
        setFirstNameError(true);
      } else if (e.target.value.length < 2) {
        setFirstNameError(true);
      } else {
        setFirstNameError(false);
      }
    }
  };

  const validateLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length === "") {
      setLastNameError(true);
    } else {
      let checkFirstName = String(e.target.value)
        .toLowerCase()
        .match(/[a-zA-Z\-]+$/);
      if (!checkFirstName) {
        setLastNameError(true);
      } else if (e.target.value.length < 2) {
        setLastNameError(true);
      } else {
        setLastNameError(false);
      }
    }
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmailError(true);
    } else {
      let checkEmail = String(e.target.value).match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!checkEmail) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
  };

  const validatePhoneNumber = (e) => {
    setPhoneNum(e.target.value);
    if (e.target.value === "") {
      setPhoneNumError(true);
    } else {
      setPhoneNumError(false);
    }
  };

  const addDetailsHandler = () => {
    if (!firstName && !lastName && !email && !phoneNum) {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
      setPhoneNumError(true);
      return;
    } else if (!firstName) {
      setFirstNameError(true);
      return;
    } else if (!lastName) {
      setLastNameError(true);
      return;
    } else if (!email) {
      setEmailError(true);
      return;
    } else if (!phoneNum) {
      setPhoneNumError(true);
      return;
    } else {
      if (
        firstName &&
        lastName &&
        email &&
        phoneNum &&
        !firstNameError &&
        !lastNameError &&
        !emailError &&
        !phoneNumError
      ) {
        let detailsData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNum: phoneNum,
        };
        dispatch(addDetailes(detailsData, setIsLoading));
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNum("");
      }
    }
  };

  const updateFieldsHandler = (paramsData) => {
    setFirstName(paramsData?.firstName);
    setLastName(paramsData?.lastName);
    setEmail(paramsData?.email);
    setPhoneNum(paramsData?.phoneNum);
    setUpdateId(paramsData?._id);
    setFlag(true);
  };

  const updateDetailsHandler = () => {
    if (!firstName && !lastName && !email && !phoneNum) {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
      setPhoneNumError(true);
      return;
    } else if (!firstName) {
      setFirstNameError(true);
      return;
    } else if (!lastName) {
      setLastNameError(true);
      return;
    } else if (!email) {
      setEmailError(true);
      return;
    } else if (!phoneNum) {
      setPhoneNumError(true);
      return;
    } else {
      if (
        firstName &&
        lastName &&
        email &&
        phoneNum &&
        !firstNameError &&
        !lastNameError &&
        !emailError &&
        !phoneNumError
      ) {
        let detailsData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNum: phoneNum,
          _id: updateId,
        };
        dispatch(updateDetails(detailsData, setIsLoading));
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNum("");
        setFlag(false);
      }
    }
  };
  return {
    firstName,
    validateFirstName,
    firstNameError,
    lastName,
    validateLastName,
    lastNameError,
    email,
    validateEmail,
    emailError,
    addDetailsHandler,
    isLoading,
    flag,
    updateDetailsHandler,
    validatePhoneNumber,
    phoneNum,
    phoneNumError,
    setPhoneNum,
    updateFieldsHandler,
  };
}
