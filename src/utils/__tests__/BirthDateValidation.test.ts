import {
  validateDateFormat
} from "../../pages/Register";

test("Checks if a birth day date string is valid", () => {
  // Valid samples
  expect(validateDateFormat("01/02/2020")).toBe(1);
  expect(validateDateFormat("13/03/2008")).toBe(1);
  expect(validateDateFormat("31/03/2000")).toBe(1);
  expect(validateDateFormat("31/12/2020")).toBe(1);
  expect(validateDateFormat("12/12/2020")).toBe(1);
  expect(validateDateFormat("13/12/2020")).toBe(1);
  expect(validateDateFormat("12/12/2020")).toBe(1);
  expect(validateDateFormat("13/12/2020")).toBe(1);

  // Invalid samples
  expect(validateDateFormat("29/02/1999")).toBe(
    "day outside the limits of February - not a leap year"
  );
  expect(validateDateFormat("29/02/2019")).toBe(
    "day outside the limits of February - not a leap year"
  );
  expect(validateDateFormat("30/02/2000")).toBe(
    "day outside the limits of February - leap year"
  );
  expect(validateDateFormat("30/02/2016")).toBe(
    "day outside the limits of February - leap year"
  );
  expect(validateDateFormat("31/04/2005")).toBe("day outside the month limits");
  expect(validateDateFormat("31/06/2000")).toBe("day outside the month limits");
  expect(validateDateFormat("31/09/2020")).toBe("day outside the month limits");
  expect(validateDateFormat("31/11/2017")).toBe("day outside the month limits");
  expect(validateDateFormat("13/12/2022")).toBe(
    "year bigger than the current one"
  );
  expect(validateDateFormat("13/12/2030")).toBe(
    "year bigger than the current one"
  );
  expect(validateDateFormat("40/12/2000")).toBe("incorrect format");
  expect(validateDateFormat("12/13/2000")).toBe("incorrect format");
  expect(validateDateFormat("")).toBe("empty date");
});