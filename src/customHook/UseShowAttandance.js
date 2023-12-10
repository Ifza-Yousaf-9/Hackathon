import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAttendanceDetail,  
  showAttendanceDetails,  
} from "../redux/actions/Actions";  

export default function useShowAttendance() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const attendanceData = useSelector(
    (store) => store?.Reducers?.attendanceDetails  
  );

  useEffect(() => {
    dispatch(showAttendanceDetails(setIsLoading));  
  }, []);

  const deleteAttendanceHandler = (attendanceID) => {
    dispatch(deleteAttendanceDetail(attendanceID, setIsLoading));  
  };

  return {
    isLoading,
    attendanceData,
    deleteAttendanceHandler,
  };
}