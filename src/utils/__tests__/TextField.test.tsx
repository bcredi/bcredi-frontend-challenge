import React from "react";
import TextField from "../../components/TextField";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<TextField />", () => {
  // Email Input
  test("Renders email input", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(
      <TextField
        name="email"
        placeholder="teste@teste.com"
        error={false}
        value={""}
        handleChange={() => {}}
        validateValueFormat={() => {}}
        setEmpty={() => {}}
      />,
      wrapper
    );

    const label = wrapper.querySelector("label");
    expect(label?.firstChild?.textContent).toEqual("E-mail");

    const input = wrapper.querySelector(".form-input");
    expect(input?.getAttribute("type")).toEqual("text");
    expect(input?.getAttribute("name")).toEqual("email");
    expect(input?.getAttribute("placeholder")).toEqual("teste@teste.com");
    expect(input?.getAttribute("maxlength")).toEqual("60");
  });

  // CPF Input
  test("Renders cpf input", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(
      <TextField
        name="cpf"
        placeholder="000.000.000-00"
        error={false}
        value={""}
        maxLength={14}
        handleChange={() => {}}
        validateValueFormat={() => {}}
        setEmpty={() => {}}
      />,
      wrapper
    );

    const label = wrapper.querySelector("label");
    expect(label?.firstChild?.textContent).toEqual("CPF");

    const input = wrapper.querySelector(".form-input");
    expect(input?.getAttribute("type")).toEqual("text");
    expect(input?.getAttribute("name")).toEqual("cpf");
    expect(input?.getAttribute("placeholder")).toEqual("000.000.000-00");
    expect(input?.getAttribute("maxlength")).toEqual("14");
  });

  // BirthDate Input
  test("Renders birth date input", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(
      <TextField
        name="birthDate"
        placeholder="DD/MM/AA"
        error={false}
        value={""}
        maxLength={10}
        handleChange={() => {}}
        validateValueFormat={() => {}}
        setEmpty={() => {}}
      />,
      wrapper
    );

    const label = wrapper.querySelector("label");
    expect(label?.firstChild?.textContent).toEqual("Data de nascimento");

    const input = wrapper.querySelector(".form-input");
    expect(input?.getAttribute("type")).toEqual("text");
    expect(input?.getAttribute("name")).toEqual("birthDate");
    expect(input?.getAttribute("placeholder")).toEqual("DD/MM/AA");
    expect(input?.getAttribute("maxlength")).toEqual("10");
  });

  // Password Input
  test("Renders password input", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(
      <TextField
        name="password"
        placeholder="Cadastre uma senha"
        error={false}
        value={""}
        minLength={8}
        handleChange={() => {}}
        validateValueFormat={() => {}}
        setEmpty={() => {}}
      />,
      wrapper
    );

    const label = wrapper.querySelector("label");
    expect(label?.firstChild?.textContent).toEqual("Senha");

    const input = wrapper.querySelector(".form-input");
    expect(input?.getAttribute("type")).toEqual("password");
    expect(input?.getAttribute("name")).toEqual("password");
    expect(input?.getAttribute("placeholder")).toEqual("Cadastre uma senha");
    expect(input?.getAttribute("minlength")).toEqual("8");
    expect(input?.getAttribute("maxlength")).toEqual("60");
  });

  test("Catches DOM unexpected changes", () => {
    const component = renderer
      .create(
        <TextField
          name="email"
          placeholder="teste@teste.com"
          error={false}
          value={""}
          handleChange={() => {}}
          validateValueFormat={() => {}}
          setEmpty={() => {}}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
