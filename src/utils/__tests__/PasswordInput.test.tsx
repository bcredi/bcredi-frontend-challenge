import React from "react";
import { PasswordInput } from "../../components/PasswordInput";
import renderer from "react-test-renderer";

test("Checks if the component is correctly rendered", () => {
  const component = renderer
    .create(<PasswordInput setEmpty={() => {}} error={false} handleChange={() => {}} value={""} />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
