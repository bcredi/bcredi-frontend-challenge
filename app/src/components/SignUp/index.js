import React, { useState } from "react";

// Components
import Box from "../Box";
import Button from "../Button";
import Form from "../Form";
import Icon from "../Icon";
import Input from "../Input";
import Link from "../Link";
import Text from "../Text";
import Title from "../Title";
import Toggle from "../Toggle";
import Row from "../Row";

// Utils
import translate from "../../locales";

// Styles
import "./index.css";

// Fake api
const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

// Component
const SignUp = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    document: "",
    birthdate: "",
    password: "",
    terms: ""
  });

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
  }

  function handleError(err) {
    setErrors(err);
  }

  function handleSuccess(data) {
    setErrors([]);
    setLoading(true);

    console.log(data);

    fetch(ENDPOINT, {
      method: "post",
      body: {
        ...data
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setLoading(false);
      });
  }

  return (
    <div className="signup">
      <div className="signup__header">
        <Icon className="signup__header__logo" icon="logo" />
      </div>
      <div className="signup__content">
        <Title>{translate("signUp.title")}</Title>
        <Text center>{translate("signUp.description")}</Text>
        <Form onError={handleError} onSuccess={handleSuccess} data={form}>
          <Row>
            <Input
              label={translate("signUp.email")}
              placeholder={translate("signUp.emailPlaceholder")}
              errorMessage={translate("errors.email")}
              error={errors.email}
              name="email"
              type="email"
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Input
              label={translate("signUp.document")}
              placeholder={translate("signUp.documentPlaceholder")}
              errorMessage={translate("errors.document")}
              error={errors.document}
              name="document"
              mask="document"
              onChange={handleChange}
            />
            <Input
              label={translate("signUp.birthDate")}
              placeholder={translate("signUp.birthDatePlaceholder")}
              errorMessage={translate("errors.birthdate")}
              error={errors.birthdate}
              name="birthdate"
              mask="date"
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Input
              label={translate("signUp.password")}
              placeholder={translate("signUp.passwordPlaceholder")}
              errorMessage={translate("errors.password")}
              error={errors.password}
              name="password"
              icon="view"
              onChange={handleChange}
              type="password"
            />
          </Row>
          <Box error={errors.terms}>
            <Row>
              <Toggle active={false} name="terms" onChange={handleChange} />
              <div>
                <Text marginless small>
                  {translate("terms.preffix")}{" "}
                  <Link small>{translate("terms.privacy")}</Link>
                  {translate("terms.stop")}{" "}
                  <Link small>{translate("terms.information")}</Link>
                </Text>
              </div>
            </Row>
          </Box>
          {errors.terms && (
            <Text small error>
              {translate("errors.terms")}
            </Text>
          )}
          <Row>
            <Button icon="locked" type="submit" disabled={loading}>
              {loading
                ? translate("signUp.submiting")
                : translate("signUp.submit")}
            </Button>
          </Row>
        </Form>
      </div>
      <div className="signup__footer">
        <Text center>
          {translate("footer.preffix")}
          <Link>{translate("footer.suffix")}</Link>
        </Text>
      </div>
    </div>
  );
};

export default SignUp;
