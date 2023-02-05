import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { DatePickerX } from "./DatePickerX";

describe("change date picker value test 1", () => {
  test("use datepicker label; set string", async () => {
    render(<DatePickerX />);

    const input = screen.getByLabelText("datepicker_label");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "3000/01/01" } });
    });

    expect(screen.getByDisplayValue("3000/01/01")).toBeVisible();
  });
});
