import {
  validateCpfFormat,
  rejectedCpfs,
} from "../../pages/Register";

test("Checks if a cpf string is valid", () => {
  // Valid samples
  expect(validateCpfFormat("079.909.614-82")).toBe(1);
  expect(validateCpfFormat("705.226.084-00")).toBe(1);
  expect(validateCpfFormat("646.107.649-20")).toBe(1);
  expect(validateCpfFormat("163.946.072-15")).toBe(1);
  expect(validateCpfFormat("000.514.487-69")).toBe(1);
  expect(validateCpfFormat("780.337.132-91")).toBe(1);
  expect(validateCpfFormat("627.485.052-04")).toBe(1);
  expect(validateCpfFormat("746.583.792-87")).toBe(1);

  // Invalid samples

  // Repetitive Numbers
  rejectedCpfs.forEach((cpf) => {
    expect(
      validateCpfFormat(
        cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
      )
    ).toBe("repetitive numbers");
  });

  // incorrect format
  expect(validateCpfFormat("079909.614-82")).toBe("incorrect format");
  expect(validateCpfFormat("706.226084-00")).toBe("incorrect format");
  expect(validateCpfFormat("646.107.64920")).toBe("incorrect format");
  expect(validateCpfFormat("16394607215")).toBe("incorrect format");
  expect(validateCpfFormat("000213")).toBe("incorrect format");
  expect(validateCpfFormat("780.132-91")).toBe("incorrect format");
  expect(validateCpfFormat("627.485.052")).toBe("incorrect format");
  expect(validateCpfFormat("746.583.7-8792")).toBe("incorrect format");

  // rest does not match the digits
  expect(validateCpfFormat("234.546.234-89")).toBe(
    "rest does not match the digits"
  );
  expect(validateCpfFormat("123.321.123-12")).toBe(
    "rest does not match the digits"
  );
  expect(validateCpfFormat("567.567.756-76")).toBe(
    "rest does not match the digits"
  );
  expect(validateCpfFormat("978.789.312-12")).toBe(
    "rest does not match the digits"
  );
  expect(validateCpfFormat("432.123.123-43")).toBe(
    "rest does not match the digits"
  );
  expect(validateCpfFormat("089.089.890-09")).toBe(
    "rest does not match the digits"
  );
  expect(validateCpfFormat("890.345.345-12")).toBe(
    "rest does not match the digits"
  );
  expect(validateCpfFormat("321.456.123-78")).toBe(
    "rest does not match the digits"
  );

  //empty cpf
  expect(validateCpfFormat("")).toBe("empty cpf");
});