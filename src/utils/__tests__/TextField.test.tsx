import React from "react";
import TextField from "../../components/TextField";
import RegisterForm from "../../components/RegisterForm";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import { User, InputError } from "../../pages/Register/types";

// Email Input
test("Renders email input", () => {
  const wrapper = mount(
    <TextField
      name="email"
      placeholder="teste@teste.com"
      error={false}
      value={""}
      handleChange={() => {}}
      validateValueFormat={() => {}}
      setEmpty={() => {}}
    />
  );
  const label = wrapper.find("label");
  expect(label).toHaveLength(1);
  expect(label.text()).toEqual("E-mail");
  const input = wrapper.find("input");
  expect(input).toHaveLength(1);
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("name")).toEqual("email");
  expect(input.prop("placeholder")).toEqual("teste@teste.com");
  expect(input.prop("maxlength")).toEqual(60);
});

test("Email input reads and Sets input value", () => {
  const wrapper = document.createElement("div");
  ReactDOM.render(
    <RegisterForm
      formTitle="Test"
      formDescription="Test description"
      handleSubmit={() => {}}
      data={{} as User}
      formErrors={{} as InputError}
      setData={() => {}}
      setFormErrors={() => {}}
      readCheck={false}
    >
      <TextField
        name="email"
        placeholder="teste@teste.com"
        error={false}
        value={""}
        handleChange={() => {}}
        validateValueFormat={() => {}}
        setEmpty={() => {}}
      />
    </RegisterForm>,
    wrapper
  );
  const input = wrapper.querySelector("input");
  TestUtils.Simulate.change(input!, {
    target: { value: "ozielalves7@gmail.com" },
  } as any);
  expect(input!.value).toEqual("ozielalves7@gmail.com");
});

// CPF Input
test("Renders cpf input", () => {
  const wrapper = mount(
    <TextField
      name="cpf"
      placeholder="000.000.000-00"
      maxLength={14}
      error={false}
      value={""}
      handleChange={() => {}}
      validateValueFormat={() => {}}
      setEmpty={() => {}}
    />
  );
  const label = wrapper.find("label");
  expect(label).toHaveLength(1);
  expect(label.text()).toEqual("CPF");
  const input = wrapper.find("input");
  expect(input).toHaveLength(1);
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("name")).toEqual("cpf");
  expect(input.prop("placeholder")).toEqual("000.000.000-00");
  expect(input.prop("maxlength")).toEqual(14);
});

test("CPF input reads and Sets input value", () => {
  const wrapper = document.createElement("div");
  ReactDOM.render(
    <RegisterForm
      formTitle="Test"
      formDescription="Test description"
      handleSubmit={() => {}}
      data={{} as User}
      formErrors={{} as InputError}
      setData={() => {}}
      setFormErrors={() => {}}
      readCheck={false}
    >
      <TextField
        name="cpf"
        placeholder="000.000.000-00"
        maxLength={14}
        error={false}
        value={""}
        handleChange={() => {}}
        validateValueFormat={() => {}}
        setEmpty={() => {}}
      />
    </RegisterForm>,
    wrapper
  );
  const input = wrapper.querySelector("input");
  TestUtils.Simulate.change(input!, {
    target: { value: "12345678910" },
  } as any);
  expect(input!.value).toEqual("123.456.789-10");
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
