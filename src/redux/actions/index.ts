import {
  TOGGLE_LOADING,
  SET_ERROR_INFO,
  SET_PERSON_INFO,
} from "../../constants/actionTypes";
import { fetchPersonInfo } from "../../services";

import type { Dispatch, PersonInfo } from "../../types";

export function setLoading(loading: boolean) {
  return {
    type: TOGGLE_LOADING,
    loading,
  };
}

export function setPersonInfo(data: PersonInfo) {
  return {
    type: SET_PERSON_INFO,
    data,
  };
}

export function setErrorInfo(error: string) {
  return {
    type: SET_ERROR_INFO,
    error,
  };
}

export function queryPersonInfo(qqNumber: number) {
  return (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    return fetchPersonInfo(qqNumber)
      .then((json: any) => {
        // todo 转换数据
        const data = json as PersonInfo;
        dispatch(setPersonInfo(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setErrorInfo(error));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
