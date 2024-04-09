// import { repeatWord } from "../../utils/repeatWord.js";

const repeatWord = require("../../utils/repeatWord.js");

describe("tests for repeatWord function", () => {
  it("should repeat string count times", () =>
    expect(repeatWord("слово", 3)).toBe("слово1, слово2, слово3"));
});
