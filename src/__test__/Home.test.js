import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders app component", () => {
  render(<App />);
  screen.getByText("Taste-it");
  screen.getByText("Add recipes");
});
