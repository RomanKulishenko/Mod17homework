import { countDown } from "../../utils/countDown.js";

describe("tests for countDown function", () => {
  it("should operate correctly with number and negative number", () => {
    expect(countDown(-18)).toBe("Данные неверны");
    expect(countDown(0)).toBe("Данные неверны");
    expect(countDown(5)).toBe(5, 4, 3, 2, 1);
  });
});
