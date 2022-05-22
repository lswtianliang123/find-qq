import { BackendPersonInfo, PersonInfo } from "../types";

export const getUIPersonFromBackendObj = (backendObj: BackendPersonInfo) => {
  const personInfo = {} as PersonInfo;
  personInfo.headUrl = backendObj.qlogo;
  personInfo.nickName = backendObj.name;
  personInfo.qqNumber = backendObj.qq;
  return personInfo;
};
