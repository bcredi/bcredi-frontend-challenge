
import React from "react";
import RegisterPage from "../../pages/Register";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe('<RegisterPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RegisterPage />);
  })

  test("Catches DOM unexpected changes", () => {
    const component = renderer.create(<RegisterPage />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  })
});
