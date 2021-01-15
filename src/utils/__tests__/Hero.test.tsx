import React from "react";
import renderer from "react-test-renderer";
import Hero from "../../components/Hero";
import { shallow } from "enzyme";

describe("<Hero />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Hero />);
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });

  test("Checks if the component is correctly rendered", () => {
    const component = renderer
      .create(
        <Hero>
          <p>Test</p>
        </Hero>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("Should render the hero content", () => {
    const wrapper = shallow(
      <Hero>
        <p>Test</p>
      </Hero>
    );
    const text = wrapper.find("p");
    expect(text.text()).toBe("Test");
  });
});
