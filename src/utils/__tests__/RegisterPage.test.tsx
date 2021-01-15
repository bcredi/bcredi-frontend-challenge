import React from "react";
import RegisterPage from "../../pages/Register";
import renderer from "react-test-renderer";
import { mount } from 'enzyme';

test("Checks if the component is correctly rendered", () => {
  const component = renderer.create(<RegisterPage />).toJSON();
  expect(component).toMatchSnapshot();
});

test('Calls handleSubmit function when form is submitted', () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<RegisterPage />);
  const registerFormWrapper = wrapper.find('form');
  registerFormWrapper.simulate('submit');
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
