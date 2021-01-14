import React from "react";
import styled from "styled-components";
import { InputError } from "../../styles";

interface props {
  setNotChecked: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const Checkbox = ({ setNotChecked, handleChange, error, value }: props) => {
  function validateCheckBox(value: string) {
    if (value !== "") {
      setNotChecked(false);
      if (value === "false") {
        setNotChecked(true);
      }
    } else {
      setNotChecked(true);
    }
  }

  return (
    <InputWrapper
      style={{
        border: `1px solid ${
          !error ? "var(--base-color-border)" : "var(--base-color-error)"
        }`,
      }}
    >
      <input
        required
        width="320px"
        className="checkbox-input"
        name="readCheck"
        type="checkbox"
        value={value.toString()}
        onChange={() => handleChange(!value)}
        onBlur={(e) => validateCheckBox(e.target.value)}
        onInvalid={() => setNotChecked(true)}
      />
      <span className="register__checkbox-label">
        Li e estou de acordo com a{" "}
        <a href="/privacy-policy" title="Política de privacidade - Bcredi">
          Política de Privacidade
        </a>{" "}
        e a{" "}
        <a href="/use-policy" title="Política de uso - Bcredi">
          Política de Uso de Informações
        </a>
        .
      </span>
      {error && (
        <StyledInputError>Por favor confirme os termos de uso</StyledInputError>
      )}
    </InputWrapper>
  );
};

const StyledInputError = styled(InputError)`
  top: 60px;
  @media (max-width: 600px) {
    top: 97px;
  }
`;

const InputWrapper = styled.div`
  height: 56px;
  width: 320px;
  border-radius: 3px;
  border: 1px solid var(--base-color-border);
  padding: 7px 5px 9px 12px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  margin-top: 36px;

  .checkbox-input {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;
  }

  .register__checkbox-label {
    width: 267px;
    margin: 7px 5px 9px 12px;
    font-size: 12px;
    line-height: 20px;
    color: var(--base-color-pinkish-grey);

    @media (max-width: 600px) {
      width: 230px;
    }
  }

  .register__checkbox-label > a {
    color: #4c8afe;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 312px;
    height: 92px;
  }
`;

export default Checkbox;
