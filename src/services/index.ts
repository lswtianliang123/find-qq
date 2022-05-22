import api from "./api";

export const fetchPersonInfo = (qqNumber: number) => {
  return api.get(`qq.info?qq=${qqNumber}`);
};
