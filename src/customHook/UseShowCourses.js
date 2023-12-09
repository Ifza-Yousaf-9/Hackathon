import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseDetail,
  showCourseDetails,
} from "../redux/actions/Actions";

export default function UseShowCourses() {
  const dispatch = useDispatch();

  // states
  const [isLoading, setIsLoading] = useState(false);

  const storeData = useSelector(
    (store) => store?.Reducers?.isAllCoursesDetails
  );
  // console.log(storeData,"storeData");

  // show details handler
  useEffect(() => {
    dispatch(showCourseDetails(setIsLoading));
  }, []);

  // delete details handler
  const deleteDetailsHandler = (detailID) => {
    dispatch(deleteCourseDetail(detailID, setIsLoading));
  };

  return {
    isLoading,
    storeData,
    deleteDetailsHandler,
  };
}
