import { validateQQ } from "../index";

test("校验是否为合法的QQ号", () => {
  const qqNUmber = "12345";
  const isValid = validateQQ(qqNUmber);
  expect(isValid).toBe(true);
});

test("校验是否为非法的QQ号", () => {
  const qqNUmber = "a12345";
  const isValid = validateQQ(qqNUmber);
  expect(isValid).toBe(false);
});

test("校验QQ号长度不在 5 - 10 之间", () => {
  const qqNUmber = "123";
  const isValid = validateQQ(qqNUmber);
  expect(isValid).toBe(false);
});
