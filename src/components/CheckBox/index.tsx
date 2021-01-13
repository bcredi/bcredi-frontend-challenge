import React from "react";
import styled from "styled-components";
import { InputError } from "../../styles";

interface props {
  error: boolean;
  handleChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const Checkbox = ({
  handleChange,
  error,
  value,
}: props) => {
  return (
    <>
      <InputWrapper
        style={{
          border: `1px solid ${
            !error ? "var(--base-color-border)" : "var(--base-color-error)"
          }`,
        }}
      >
        <input
          width="320px"
          className="register__input--checkbox"
          name="readCheck"
          type="checkbox"
          value={value.toString()}
          onChange={() => handleChange(!value)}
          style={{
            border: `1px solid ${
              error ? "var(--base-color-error)" : "var(--base-color-border)"
            }`,
            color: `${
              error ? "var(--base-color-error" : "var(--base-color-text)"
            }`,
          }}
        />
        <span className="register__checkbox-label">
          Li e estou de acordo com a{" "}
          <a
            href="#politica-de-privacidade"
            title="Política de privacidade da Bcredi"
          >
            Política de Privacidade
          </a>{" "}
          e a{" "}
          <a href="#politica-de-uso" title="Política de uso da Bcredi">
            Política de Uso de Informações
          </a>
          .
        </span>
      </InputWrapper>
      {error && <InputError>Confirme os termos de uso</InputError>}
    </>
  );
};

const Input = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  height: 56px;
  width: 320px;
  margin-top: 36px;
  border-radius: 3px;
  border: 1px solid var(--base-color-border);
  padding: 7px 5px 9px 12px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;

  .register__input--checkbox {
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
