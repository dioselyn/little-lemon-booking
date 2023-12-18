import { render, screen } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

describe("Booking Component", () => {
  test("Renders the BookingForm heading", () => {
    const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Number of guests");
    expect(headingElement).toBeInTheDocument();
  });
});
