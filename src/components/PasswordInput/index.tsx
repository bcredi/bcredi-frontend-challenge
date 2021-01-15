import React, { useState } from "react";
import styled from "styled-components";
import { InputWrapper, InputError, Input } from "../../styles";
import { ReactComponent as EyeSvg } from "../../assets/eye-solid.svg";
import { ReactComponent as EyeSlashSvg } from "../../assets/eye-slash-solid.svg";

interface props {
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: any;
  value: string;
}

function validatePasswordFormat (password: string) {
  if( password !== "") {
    if(password.length >= 8){
      return 1;
    } else {
      return "incorrect format";
    }
  } else {
    return "empty password";
  }
}

const PasswordInput = ({ setEmpty, error, handleChange, value }: props) => {
  const [validPassword, setValidPassword] = useState(true);
  const [visible, toggleVisible] = useState(false);

  function validatePassword(value: string) {
    if (value !== "") {
      setEmpty(false);
      if (value.length < 8) {
        setValidPassword(false);
      } else {
        setValidPassword(true);
      }
    } else {
      setValidPassword(true);
    }
  }

  return (
    <InputWrapper>
      <InputLabel>Senha</InputLabel>
      <Input
        required
        placeholder="Cadastre uma senha"
        type={visible ? "text" : "password"}
        minLength={8}
        name="password"
        value={value && value}
        onChange={(e) => {
          handleChange(e);
        }}
        onBlur={(e) => validatePassword(e.target.value)}
        onInvalid={() => setEmpty(true)}
        style={{
          border: `1px solid ${
            error || !validPassword
              ? "var(--base-color-error)"
              : "var(--base-color-border)"
          }`,
          color: `${
            error || !validPassword
              ? "var(--base-color-error"
              : "var(--base-color-text)"
          }`,
        }}
      />
      {!visible ? (
        <EyeIcon onClick={() => toggleVisible(!visible)} />
      ) : (
        <EyeSlashIcon onClick={() => toggleVisible(!visible)} />
      )}
      <InputError>
        {!validPassword
          ? "A senha precisa ter no mínimo 8 caracteres"
          : error
          ? "O campo senha é obrigatório"
          : null}
      </InputError>
    </InputWrapper>
  );
};

/* const StyledInputWrapper = styled(InputWrapper)`
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }
`; */

const InputLabel = styled.label`
  width: 148px;
  font-size: 14px;
  line-height: 18px;
  color: var(--base-color-warm-grey);
  text-align: left;

  @media (max-width: 600px) {
    width: 312px;
  }
`;

const EyeIcon = styled(EyeSvg)`
  width: 16px;
  height: 10px;
  position: relative;
  color: var(--base-color-warm-grey);
  margin-left: -30px;
  cursor: pointer;
  &:hover {
    color: var(--base-color-text);
  }
`;

const EyeSlashIcon = styled(EyeSlashSvg)`
  width: 16px;
  height: 10px;
  position: relative;
  color: var(--base-color-warm-grey);
  margin-left: -30px;
  cursor: pointer;
  &:hover {
    color: var(--base-color-text);
  }
`;

export { PasswordInput, validatePasswordFormat } ;
