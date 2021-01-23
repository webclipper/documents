const addPrefix = require("./addPrefix");

describe("test addPrefix", () => {
  it("test addPrefix", () => {
    expect(
      addPrefix(["how-to-contribute", "localization"], "/zh/contribute/")
    ).toEqual([
      "/zh/contribute/how-to-contribute",
      "/zh/contribute/localization",
    ]);
  });
});
