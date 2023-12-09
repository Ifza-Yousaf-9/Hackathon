import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseDetail,
  showCourseDetails,
} from "../redux/actions/Actions";

export default function UseShowCourses() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const storeData = useSelector(
    (store) => store?.Reducers?.isAllCoursesDetails
  );
  
  useEffect(() => {
    dispatch(showCourseDetails(setIsLoading));
  }, []);

  const deleteDetailsHandler = (detailID) => {
    dispatch(deleteCourseDetail(detailID, setIsLoading));
  };

  return {
    isLoading,
    storeData,
    deleteDetailsHandler,
  };
}
