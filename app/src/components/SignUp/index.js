import React from "react";

// Components
import Box from "../Box";
import Button from "../Button";
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

// Component
const SignUp = ({ children }) => {
  return (
    <div className="signup">
      <div className="signup__header">
        <Icon className="signup__header__logo" icon="logo" />
      </div>
      <div className="signup__content">
        <Title>{translate("signUp.title")}</Title>
        <Text center>{translate("signUp.description")}</Text>
        <Row>
          <Input
            label={translate("signUp.email")}
            placeholder={translate("signUp.emailPlaceholder")}
            name="email"
          />
        </Row>
        <Row>
          <Input
            label={translate("signUp.document")}
            placeholder={translate("signUp.documentPlaceholder")}
            name="document"
          />
          <Input
            label={translate("signUp.birthDate")}
            placeholder={translate("signUp.birthDatePlaceholder")}
            name="birthdate"
          />
        </Row>
        <Row>
          <Input
            label={translate("signUp.password")}
            placeholder={translate("signUp.passwordPlaceholder")}
            name="password"
            icon="view"
          />
        </Row>
        <Box>
          <Row>
            <Toggle active={false} />
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
        <Row>
          <Button icon="locked">Cadastrar</Button>
        </Row>
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
