import {
  TOGGLE_LOADING,
  SET_ERROR_INFO,
  SET_PERSON_INFO,
} from "../../constants/actionTypes";

import type { ReduxState } from "../../types";
import type { AnyAction } from "redux";

const initialState: ReduxState = {
  error: undefined,
  loading: false,
  headUrl: "",
  nickName: "",
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, loading: action.loading };

    case SET_ERROR_INFO:
      return { ...state, error: action.error };

    case SET_PERSON_INFO:
      return { ...state, headUrl: action.headUrl, nickName: action.nickName };

    default:
      return state;
  }
};
