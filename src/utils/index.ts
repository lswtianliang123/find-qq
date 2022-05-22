export const validateQQ = (qqNumber: string) => {
  // 数字，首位不能为0， 长度为 5-10
  const regexStr = new RegExp(/^[1-9][0-9]{4,9}$/);
  return regexStr.test(qqNumber);
};

export * from "./convertor";
