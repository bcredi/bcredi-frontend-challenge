import React from "react";
import CheckBox from "../../components/CheckBox";
import renderer from "react-test-renderer";

describe("<CheckBox />", () => {
  test("Checks if the component is correctly rendered", () => {
    const component = renderer
      .create(
        <CheckBox
          setNotChecked={() => {}}
          error={false}
          handleChange={() => {}}
          value={false}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
