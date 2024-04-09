import { getPercents } from "../../utils/getPercents.js";

describe("test for getPercents function", () => {
  const percents = 30;
  const numbers = 200;

  it("should operate correctly with percents and numbers", () => {
    expect(getPercents(percents, numbers)).toBe(60);
  });
});
