import { textUtils } from "./textUtils";

describe("textUtil", () => {
  describe("limitCharacters", () => {
    it("should return the same text if it is shorter than the limit", () => {
      const text = "short text";
      const result = textUtils.limitCharacters(text);
      expect(result).toEqual(text);
    });
  });
});
