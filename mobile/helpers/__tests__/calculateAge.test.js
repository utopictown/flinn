import calculateAge from "../calculateAge";

describe("calculateAge", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2022-11-21"));
  });

  it("calculate correct age", () => {
    const dob = new Date("2016-03-13 12:00:00");
    const calculatedAge = calculateAge(dob);
    expect(calculatedAge).toBe("6 years 8 months");
  });

  it("calculate correct age when havent reach birthmonth", () => {
    const dob = new Date("2016-12-13 12:00:00");
    const calculatedAge = calculateAge(dob);
    expect(calculatedAge).toBe("5 years 11 months");
  });
});
