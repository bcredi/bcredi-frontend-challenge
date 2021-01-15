import {
  validatePasswordFormat,
} from "../../pages/Register";

test("Checks if a cpf string is valid", () => {
  // Valid samples
  expect(validatePasswordFormat("12345678")).toBe(1);
  expect(validatePasswordFormat("09876423")).toBe(1);
  expect(validatePasswordFormat("1234***&")).toBe(1);
  expect(validatePasswordFormat("123@5678")).toBe(1);
  expect(validatePasswordFormat("paulalemos")).toBe(1);
  expect(validatePasswordFormat("a@n$i3d@d3")).toBe(1);
  expect(validatePasswordFormat("abobrinhas")).toBe(1);
  expect(validatePasswordFormat("90907870")).toBe(1);

  // Invalid samples

  // incorrect format
  expect(validatePasswordFormat("1234567")).toBe("incorrect format");
  expect(validatePasswordFormat(".")).toBe("incorrect format");
  expect(validatePasswordFormat("12354")).toBe("incorrect format");
  
  // empty password
  expect(validatePasswordFormat("")).toBe("empty password");
});
