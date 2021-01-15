import {
  validateEmailFormat,
} from "../../pages/Register";

test("Checks if a cpf string is valid", () => {
  // Valid samples
  expect(validateEmailFormat("ozielalves7@gmail.com")).toBe(1);
  expect(validateEmailFormat("ozielalves@ufrn.edu.br")).toBe(1);
  expect(validateEmailFormat("jorge01@yahoo.com.br")).toBe(1);
  expect(validateEmailFormat("maria_paula@gmail.com")).toBe(1);
  expect(validateEmailFormat("ana_maria@hotmail.com")).toBe(1);
  expect(validateEmailFormat("teste@outlook.com")).toBe(1);
  expect(validateEmailFormat("gabriel@bol.com.br")).toBe(1);
  expect(validateEmailFormat("louisesofia@gmail.com")).toBe(1);

  // Invalid samples

  // incorrect format
  expect(validateEmailFormat("oziel`alves7@gmail.com")).toBe("incorrect format");
  expect(validateEmailFormat("ozielalves@uf`rn.edu.br")).toBe("incorrect format");
  expect(validateEmailFormat("jorge01@yahoo.co+m.br")).toBe("incorrect format");
  expect(validateEmailFormat("ma!ria_paula@gmail.com")).toBe("incorrect format");
  expect(validateEmailFormat("ana_maria@hotmail.co@m")).toBe("incorrect format");
  expect(validateEmailFormat("teste@outl[ook.com")).toBe("incorrect format");
  expect(validateEmailFormat("gab^riel@bol.com.br")).toBe("incorrect format");
  expect(validateEmailFormat("louises*ofia@gmail.com")).toBe("incorrect format");
  expect(validateEmailFormat("louises¨ofia@gmail.com")).toBe("incorrect format");
  expect(validateEmailFormat("louis+esofia@gmail.com")).toBe("incorrect format");
  expect(validateEmailFormat("louis|esofia@gmail.com")).toBe("incorrect format");
  expect(validateEmailFormat("louises*ofia@gma+il.com")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gma!il.com")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gmai$l.com")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gma¨il.com")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gma~il.com")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gma,il.com")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gmail.co^m")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gmail.co~m")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gmail.co]m")).toBe("incorrect format");
  expect(validateEmailFormat("louisesofia@gmail.co-m")).toBe("incorrect format");

  // empty email
  expect(validateEmailFormat("")).toBe("empty email");
});
