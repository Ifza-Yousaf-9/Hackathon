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

const initialState = {
  isAllDetails: [],
  isAllCoursesDetails: [],
};

export default function Reducers(state = initialState, action) {
  switch (action?.type) {
    case ADD_DETAILS:
      let addData = [...state?.isAllDetails, action?.payload];
      return {
        ...state,
        isAllDetails: addData,
      };
    case ADD_COURSE_DETAILS:
      let addCourseData = [...state?.isAllCoursesDetails, action?.payload];
      return {
        ...state,
        isAllCoursesDetails: addCourseData,
      };

    case SHOW_DETAILS:
      return {
        ...state,
        isAllDetails: action?.payload,
      };

    case SHOW_COURSE_DETAILS:
      return {
        ...state,
        isAllCoursesDetails: action?.payload,
      };

    case DELETE_DETAILS:
      let delData = state?.isAllDetails?.filter(
        (item) => item?._id !== action?.payload
      );
      return {
        ...state,
        isAllDetails: delData,
      };

    case DELETE_COURSE_DETAILS:
      let delCourseData = state?.isAllCoursesDetails?.filter(
        (item) => item?._id !== action?.payload
      );
      return {
        ...state,
        isAllCoursesDetails: delCourseData,
      };

    case UPDATE_DETAILS:
      let updateData = state?.isAllDetails?.map((item) => {
        if (item?._id === action?.payload?._id) {
          return action?.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isAllDetails: updateData,
      };

    case UPDATE_COURSE_DETAILS:
      let updateCourseData = state?.isAllCoursesDetails?.map((item) => {
        if (item?._id === action?.payload?._id) {
          return action?.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isAllCoursesDetails: updateCourseData,
      };

    default:
      return state;
  }
}
