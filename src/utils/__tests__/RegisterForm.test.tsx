import React from "react";
import RegisterPage from "../../pages/Register";
import renderer from "react-test-renderer";
import RegisterForm from "../../components/RegisterForm";
import { InputError, User } from "../../pages/Register/types";
import { shallow } from "enzyme";

describe("<RegisterPage />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<RegisterPage />);
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });

  test("Checks if the component is correctly rendered", () => {
    const component = renderer
      .create(
        <RegisterForm
          formTitle="Test"
          formDescription="Test description"
          handleSubmit={() => {}}
          data={{} as User}
          formErrors={{} as InputError}
          setData={() => {}}
          setFormErrors={() => {}}
          readCheck={false}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  
  test("should render the form title", () => {
    const wrapper = shallow(
      <RegisterForm
        formTitle="Test"
        formDescription="Test description"
        handleSubmit={() => {}}
        data={{} as User}
        formErrors={{} as InputError}
        setData={() => {}}
        setFormErrors={() => {}}
        readCheck={false}
      />
    );
    const title = wrapper.find(".form-title");
    const description = wrapper.find(".form-description")
    expect(title.text()).toBe("Test");
    expect(description.text()).toBe("Test description");
  });
});
