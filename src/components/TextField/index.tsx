import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as EyeSvg } from "../../assets/eye-solid.svg";
import { ReactComponent as EyeSlashSvg } from "../../assets/eye-slash-solid.svg";
import { InputWrapper, InputError, Input } from "../../styles";

interface props {
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: any;
  maxLength?: number;
  minLength?: number;
  value: string;
  name: string;
  placeholder: string;
  validateValueFormat: (value: string) => 1 | any;
}

const TextField = ({
  setEmpty,
  error,
  handleChange,
  maxLength,
  minLength,
  value,
  name,
  placeholder,
  validateValueFormat,
}: props) => {
  const [validValue, setValidValue] = useState(true);
  const [visible, toggleVisible] = useState(false);

  const StyledInputWrapper =
    name === "email"
      ? EmailInputWrapper
      : name === "birthDate" || name === "cpf"
      ? SmallIpuntsWrapper
      : InputWrapper;

  function validateValue(value: string) {
    const valueValidationStatus = validateValueFormat(value);
    if (valueValidationStatus === 1) {
      setEmpty(false);
      return setValidValue(true);
    } else if (valueValidationStatus === `empty ${name}`) {
      setValidValue(true);
    } else {
      setEmpty(false);
      return setValidValue(false);
    }
  }

  function formatValue(Event: React.ChangeEvent<HTMLInputElement>) {
    if (name === "birthDate") {
      Event.target.value = Event.target.value.replace(
        /^(\d{2})(\d{2})(\d{4})$/,
        "$1/$2/$3"
      );
      handleChange(Event);
    } else if (name === "cpf") {
      Event.target.value = Event.target.value.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        "$1.$2.$3-$4"
      );
      handleChange(Event);
    } else {
      handleChange(Event);
    }
  }

  return (
    <StyledInputWrapper>
      <InputLabel>
        {name === "email"
          ? "E-mail"
          : name === "password"
          ? "Senha"
          : name === "birthDate"
          ? "Data de nascimento"
          : name === "cpf"
          ? "CPF"
          : null}
      </InputLabel>
      <Input
        required
        className="form-input"
        type={name === "password" ? (visible ? "text" : "password") : "text"}
        placeholder={placeholder}
        name={name}
        maxLength={maxLength ? maxLength : 60}
        minLength={minLength && minLength}
        value={value}
        onChange={(e) => {
          formatValue(e);
        }}
        onBlur={(e) => validateValue(e.target.value)}
        onInvalid={() => setEmpty(true)}
        style={{
          border: `1px solid ${
            error || !validValue
              ? "var(--base-color-error)"
              : "var(--base-color-border)"
          }`,
          color: `${
            error || !validValue
              ? "var(--base-color-error"
              : "var(--base-color-text)"
          }`,
        }}
      />
      {name === "password" ? (
        !visible ? (
          <EyeIcon onClick={() => toggleVisible(!visible)} />
        ) : (
          <EyeSlashIcon onClick={() => toggleVisible(!visible)} />
        )
      ) : null}
      <InputError>
        {!validValue
          ? name === "email"
            ? `O e-mail informado não é válido`
            : name === "password"
            ? "A senha precisa ter no mínimo 8 caracteres"
            : name === "birthDate"
            ? "Data inválida"
            : name === "cpf"
            ? "CPF inválido"
            : null
          : error
          ? name === "email"
            ? `O campo e-mail é obrigatório`
            : name === "password"
            ? "O campo senha é obrigatório"
            : name === "birthDate" || name === "cpf"
            ? "O campo é obrigatório"
            : null
          : null}
      </InputError>
    </StyledInputWrapper>
  );
};

const EmailInputWrapper = styled(InputWrapper)`
  margin-top: 0;
  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

const SmallIpuntsWrapper = styled(InputWrapper)`
  width: 148px;
`;

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 18px;
  color: var(--base-color-warm-grey);
  text-align: left;
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

export default TextField;
