import { getUIPersonFromBackendObj } from "../convertor";
import type { BackendPersonInfo } from "../../types";

test("测试转换方法", () => {
  const backendObj = {} as BackendPersonInfo;
  const validNickName = "for test";
  backendObj.qq = "12345";
  backendObj.name = validNickName;
  backendObj.qlogo = "https://xxx/1.jpg";

  const uiPersonInfo = getUIPersonFromBackendObj(backendObj);
  expect(uiPersonInfo.nickName).toBe(validNickName);
});
