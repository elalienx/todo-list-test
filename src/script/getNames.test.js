import getNames from "./getNames";

test("Returns Eduardo 3 times when i pass the correct data", () => {
  // Arrange
  const result = ["Eduardo", "Eduardo", "Eduardo"];

  // Act
  const arrayWithNames = getNames("Eduardo", 3);

  // Assert
  expect(arrayWithNames).toEqual(result);
});

test("Works with the name being a number", () => {
  // Arrange (setup)
  const result = ["4", "4", "4"]; // expected result

  // Act (action)
  const arrayWithNames = getNames(4, 3);

  // Assert (comparisson)
  expect(arrayWithNames).toEqual(result);
});

test("Works with the name being a undefined", () => {
  // Arrange (setup)
  const result = ["", "", ""]; // expected result

  // Act (action)
  const arrayWithNames = getNames(undefined, 3);

  // Assert (comparisson)
  expect(arrayWithNames).toEqual(result);
});
