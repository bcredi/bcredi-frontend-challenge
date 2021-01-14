import React, { useState } from "react";
import styled from "styled-components";
import { InputWrapper, InputError, Input } from "../../styles";

interface props {
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: any;
  value: string;
}

const EmailInput = ({ setEmpty, error, handleChange, value }: props) => {
  const [validEmail, setValidEmail] = useState(true);

  function validateEmail(value: string) {
    if (value !== "") {
      setEmpty(false);
      const user = value.substring(0, value.indexOf("@"));
      const domain = value.substring(value.indexOf("@") + 1, value.length);
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
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    } else {
      setValidEmail(true);
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

export default EmailInput;
