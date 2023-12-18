import { initializeTimes } from "./Booking";

describe("initializeTimes", () => {
  it("should return an array of times", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  it("should return an array", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
  });
});
