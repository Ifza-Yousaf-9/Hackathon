import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDetails, deleteDetail } from "../redux/actions/Actions";

export default function UseShowDetails() {
  const dispatch = useDispatch();

  // states
  const [isLoading, setIsLoading] = useState(false);

  const storeData = useSelector((store) => store?.Reducers?.isAllDetails);

  useEffect(() => {
    dispatch(showDetails(setIsLoading));
  }, []);

  const deleteDetailsHandler = (detailID) => {
    dispatch(deleteDetail(detailID, setIsLoading));
  };

  return {
    isLoading,
    storeData,
    deleteDetailsHandler,
  };
}
