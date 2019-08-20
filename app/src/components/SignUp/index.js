import React from "react";

// Components
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";

// Styles
import "./index.css";

// Component
const SignUp = ({ children }) => {
  return (
    <div className="signup">
      <div className="signup__header">
        <Icon className="signup__header__logo" icon="logo" />
      </div>
      <div className="signup__content"></div>
      <div className="signup__footer">
        <Text center>
          Já fiz meu cadastro. <Link>Entrar agora</Link>
        </Text>
      </div>
    </div>
  );
};

export default SignUp;
