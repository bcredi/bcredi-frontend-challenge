import React, { useState } from "react";
import styled from "styled-components";
import { InputWrapper, InputError, Input } from "../../styles";

interface props {
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: any;
  value: string;
}

/* function validate(email: string) {
  if (email !== "") {
    const user = email.substring(0, email.indexOf("@"));
    const domain = email.substring(email.indexOf("@") + 1, email.length);
    if (
      user.length >= 1 &&
      user.search("@") === -1 &&
      user.search(" ") === -1 &&
      domain.length >= 3 &&
      domain.search("@") === -1 &&
      domain.search(" ") === -1 &&
      domain.search(".") !== -1 &&
      domain.indexOf(".") >= 1 &&
      domain.lastIndexOf(".") < domain.length - 1
    ) {
      return 1;
    } else {
      return "incorrect format";
    }
  } else {
    return "empty email";
  }
} */

function validateEmailFormat(email: string) {
  if (email !== "") {
    const match = email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,+`^*!'¨|;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const correctFormat = match !== null;
    if (correctFormat) {
      return 1;
    } else {
      return "incorrect format";
    }
  } else {
    return "empty email";
  }
}

const EmailInput = ({ setEmpty, error, handleChange, value }: props) => {
  const [validEmail, setValidEmail] = useState(true);

  function validateEmail(email: string) {
    const emailValidationStatus = validateEmailFormat(email);
    if (emailValidationStatus === 1) {
      setEmpty(false);
      return setValidEmail(true);
    } else if (emailValidationStatus === "empty email") {
      setValidEmail(true);
    } else {
      setEmpty(false);
      return setValidEmail(false);
    }
  }

  return (
    <StyledInputWrapper>
      <InputLabel>E-mail</InputLabel>
      <Input
        required
        type="text"
        className="email-input"
        placeholder="ana.maria@email.com"
        name="email"
        value={value}
        onChange={handleChange}
        maxLength={60}
        onBlur={(e) => validateEmail(e.target.value)} // Quando o input perde o foco
        onInvalid={() => setEmpty(true)}
        style={{
          border: `1px solid ${
            error || !validEmail
              ? "var(--base-color-error)"
              : "var(--base-color-border)"
          }`,
          color: `${
            error || !validEmail
              ? "var(--base-color-error"
              : "var(--base-color-text)"
          }`,
        }}
      />
      <InputError>
        {!validEmail
          ? "O e-mail informado não é válido"
          : error
          ? "O campo e-mail é obrigatório"
          : null}
      </InputError>
    </StyledInputWrapper>
  );
};

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 18px;
  color: var(--base-color-warm-grey);
  text-align: left;
`;

const StyledInputWrapper = styled(InputWrapper)`
  margin-top: 0;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export { EmailInput, validateEmailFormat };
