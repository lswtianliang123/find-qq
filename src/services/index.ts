import api from "./api";

export const fetchPersonInfo = (id: number) => {
  return api.get(`/doc-qq.info.html?id=${id}`);
};
