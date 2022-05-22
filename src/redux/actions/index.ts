import {
  TOGGLE_LOADING,
  SET_ERROR_INFO,
  SET_PERSON_INFO,
} from "../../constants/actionTypes";
import { fetchPersonInfo } from "../../services";
import { getUIPersonFromBackendObj } from "../../utils";

import type { Dispatch, PersonInfo, BackendPersonInfo } from "../../types";

export function setLoading(loading: boolean) {
  return {
    type: TOGGLE_LOADING,
    loading,
  };
}

export function setPersonInfo(personInfo: PersonInfo) {
  return {
    type: SET_PERSON_INFO,
    personInfo,
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
      .then((res) => {
        // 转换为前端可用数据数据
        const uiPersonInfo = getUIPersonFromBackendObj(
          res.data as BackendPersonInfo
        );
        dispatch(setPersonInfo(uiPersonInfo));
      })
      .catch((error) => {
        // 这里可上报错误到 server 端做分析
        console.log(error);
        dispatch(setErrorInfo(error));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
