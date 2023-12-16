import getRandomAmount from "../../helpers/getRandomAmount";

describe("getRandomAmount", () => {
  test("returns a number within the specified range", () => {
    const randomAmount = getRandomAmount();

    // Check if the result is a number
    expect(typeof randomAmount).toBe("number");

    // Check if the result is within the specified range
    expect(randomAmount).toBeGreaterThanOrEqual(2000);
    expect(randomAmount).toBeLessThanOrEqual(20000);
  });
});
