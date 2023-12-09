import {
  ADD_DETAILS,
  SHOW_DETAILS,
  DELETE_DETAILS,
  UPDATE_DETAILS,
  ADD_COURSE_DETAILS,
  SHOW_COURSE_DETAILS,
  DELETE_COURSE_DETAILS,
  UPDATE_COURSE_DETAILS,
} from "../types/ActionsTypes";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import { toast } from "react-toastify";

// add details action
export const addDetailes = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    let response = await addDoc(collection(db, "studentDetails"), data);

    if (response?.id) {
      dispatch({
        type: ADD_DETAILS,
        payload: { _id: response?.id, ...data },
      });
      toast("Details added successfully!");
    }
  } catch (error) {
    console.log(error, "error in response add details");
  } finally {
    setIsLoading(false);
  }
};

export const addCourseDetailes = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    let response = await addDoc(collection(db, "coursesDetails"), data);
    if (response?.id) {
      dispatch({
        type: ADD_COURSE_DETAILS,
        payload: { _id: response?.id, ...data },
      });
      toast("Details added successfully!");
    }
  } catch (error) {
    console.log(error, "error in response add details");
  } finally {
    setIsLoading(false);
  }
};

export const showDetails = (setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    const response = await getDocs(collection(db, "studentDetails"));
    const fetchedData = response?.docs?.map((doc) => ({
      _id: doc?.id,
      ...doc?.data(),
    }));
    if (fetchedData) {
      dispatch({
        type: SHOW_DETAILS,
        payload: fetchedData,
      });
    }
  } catch (error) {
    console.log(error, "error in response show details");
  } finally {
    setIsLoading(false);
  }
};

export const showCourseDetails = (setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    const response = await getDocs(collection(db, "coursesDetails"));
    const fetchedData = response?.docs?.map((doc) => ({
      _id: doc?.id,
      ...doc?.data(),
    }));
    if (fetchedData) {
      dispatch({
        type: SHOW_COURSE_DETAILS,
        payload: fetchedData,
      });
    }
  } catch (error) {
    console.log(error, "error in response show details");
  } finally {
    setIsLoading(false);
  }
};

export const deleteDetail = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    await deleteDoc(doc(db, "studentDetails", data));
    dispatch({
      type: DELETE_DETAILS,
      payload: data,
    });
    toast("Details delete successfully!");
  } catch (error) {
    console.log(error, "error in response delete details");
  } finally {
    setIsLoading(false);
  }
};

export const deleteCourseDetail = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    await deleteDoc(doc(db, "coursesDetails", data));
    dispatch({
      type: DELETE_COURSE_DETAILS,
      payload: data,
    });
    toast("Details delete successfully!");
  } catch (error) {
    console.log(error, "error in response delete details");
  } finally {
    setIsLoading(false);
  }
};

export const updateDetails = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    await updateDoc(doc(db, "studentDetails", data?._id), data);
    dispatch({
      type: UPDATE_DETAILS,
      payload: data,
    });
    toast("Details update successfully!");
  } catch (error) {
    console.log(error, "error in response update details");
  } finally {
    setIsLoading(false);
  }
};

export const updateCourseDetails = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    await updateDoc(doc(db, "coursesDetails", data?._id), data);
    dispatch({
      type: UPDATE_COURSE_DETAILS,
      payload: data,
    });
    toast("Details update successfully!");
  } catch (error) {
    console.log(error, "error in response update details");
  } finally {
    setIsLoading(false);
  }
};
