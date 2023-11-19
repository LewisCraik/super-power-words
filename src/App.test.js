import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the default header", () => {
  render(<App />);
  const headerText = screen.getByText(/Super Power Words/i);
  expect(headerText).toBeInTheDocument();
});

test("Renders the start text", () => {
  render(<App />);
  const startText = screen.getByText(/Click to Start/i);
  expect(startText).toBeInTheDocument();
});
