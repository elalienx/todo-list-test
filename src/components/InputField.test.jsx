// Project files
import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

// It works with a correct setup and state props
test("It works with a correct setup and state props", () => {
  // Arrange
  const setup = {
    label: "Person name",
    placeholder: "Ex: Xavier",
    type: "text",
  };
  const state = ["Eduardo", () => {}];

  render(<InputField setup={setup} state={state} />);

  // Act
  const labelElement = screen.getByText(/person name/i);

  // Assert
  expect(labelElement).toBeInTheDocument();
});
