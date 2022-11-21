import capitalizeString from "../capitalizeString";

describe("capitalizeString", () => {
  it("capitalize first letter of the string", () => {
    const capd = capitalizeString("a cool test");
    expect(capd).toBe("A Cool Test");
  });
});
