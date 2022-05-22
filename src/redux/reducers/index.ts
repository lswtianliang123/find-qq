import {
  TOGGLE_LOADING,
  SET_ERROR_INFO,
  SET_PERSON_INFO,
} from "../../constants/actionTypes";
import initialState from "./initialValue";

import type { AnyAction } from "redux";

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, loading: action.loading };

    case SET_ERROR_INFO:
      return { ...state, error: action.error };

    case SET_PERSON_INFO:
      return { ...state, ...action.personInfo };

    default:
      return state;
  }
};
