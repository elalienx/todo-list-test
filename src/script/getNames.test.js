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

test("The function works with the name being a undefined", () => {
  // Arrange (setup)
  const result = ["", "", ""]; // expected result

  // Act (action)
  const arrayWithNames = getNames(undefined, 3);

  // Assert (comparisson)
  expect(arrayWithNames).toEqual(result);
});

test("Someone forgot about passing the required arguments", () => {
  // Arrange (setup)
  const whatIwant = [""];

  // Act (action)
  const arrayWithNames = getNames();

  // Assert (comparisson)
  expect(arrayWithNames).toEqual(whatIwant);
});

test("Someone puts 0 on the times argument", () => {
  // Arrange
  const whatIshouldHappen = [];

  // Act
  const arrayWithNames = getNames("Eduardo", 0);

  // Assert
  expect(arrayWithNames).toEqual(whatIshouldHappen);
});
