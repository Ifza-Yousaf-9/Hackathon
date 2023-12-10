import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addCourseDetailes,
  updateCourseDetails,
} from "../redux/actions/Actions";
import { useSearchParams } from "react-router-dom";

export default function UseAddCourse() {
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState("");
  const [courseNameError, setCourseNameError] = useState(false);
  const [courseCode, setCourseCode] = useState("");
  const [courseCodeError, setCourseCodeError] = useState(false);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [flag, setFlag] = useState(false);

  const validateCourseName = (e) => {
    setCourseName(e.target.value);
    if (e.target.value === "") {
      setCourseNameError(true);
    } else {
      setCourseNameError(false);
    }
  };

  const validateCourseCode = (e) => {
    setCourseCode(e.target.value);
    if (e.target.value === "") {
      setCourseCodeError(true);
    } else {
      setCourseCodeError(false);
    }
  };

  const validateDescription = (e) => {
    setDescription(e.target.value);
  };

  const addDetailsHandler = () => {
    if (!courseName && !courseCode) {
      setCourseNameError(true);
      setCourseCodeError(true);
      return;
    } else if (!courseName) {
      setCourseNameError(true);
      return;
    } else if (!courseCode) {
      setCourseCodeError(true);
      return;
    } else {
      if (courseName && courseCode && !courseNameError && !courseCodeError) {
        let detailsData = {
          courseName: courseName,
          courseCode: courseCode,
          description: description,
        };
        dispatch(addCourseDetailes(detailsData, setIsLoading));
        setCourseName("");
        setCourseCode("");
        setDescription("");
      }
    }
  };

  const updateFieldsHandler = (paramsData) => {
    setCourseName(paramsData?.courseName);
    setCourseCode(paramsData?.courseCode);
    setDescription(paramsData?.description);
    setUpdateId(paramsData?._id);
    setFlag(true);
  };

  const updateDetailsHandler = () => {
    if (!courseName && !courseCode) {
      setCourseNameError(true);
      setCourseCodeError(true);
      return;
    } else if (!courseName) {
      setCourseNameError(true);
      return;
    } else if (!courseCode) {
      setCourseCodeError(true);
      return;
    } else {
      if (courseName && courseCode && !courseNameError && !courseCodeError) {
        let detailsData = {
          courseName: courseName,
          courseCode: courseCode,
          description: description,
          _id: updateId,
        };
        dispatch(updateCourseDetails(detailsData, setIsLoading));
        setCourseName("");
        setCourseCode("");
        setDescription("");
        setFlag(false);
      }
    }
  };
  return {
    courseCode,
    validateCourseCode,
    courseName,
    validateCourseName,
    description,
    validateDescription,
    addDetailsHandler,
    isLoading,
    flag,
    updateDetailsHandler,
    courseCodeError,
    courseNameError,
    updateFieldsHandler
  };
}