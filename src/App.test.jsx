import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("show the 'learn react link' on the screen", () => {
  // 1. Arrange
  render(<App />);

  // 2. Act
  const linkElement = screen.getByText(/learn react/i);

  // 3. Assert
  expect(linkElement).toBeInTheDocument(); // yes? or no?
});

test("Shows a list of teachers when the button 'Show teachers' is pressed", () => {
  // Arrange
  render(<App />);

  // Action
  const button = screen.getByText(/show teachers/i);
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const listElement = screen.getByText(/eduardo/i);

  // Asset
  expect(listElement).toBeInTheDocument();
});

// // Format of the test function:
// 1. Name of the test (string)
// 2. Code to run the test (function)
// test("", () => {});

// Structure of a test
// 1. Arrange: All the preparations you need to do before you can start doing the test
// 2. Act: Perform an action related to our test 🔍👀
// 3. Assert: Confirmation or "experiment" (test itself)
