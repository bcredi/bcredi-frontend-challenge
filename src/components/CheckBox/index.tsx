import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckSvg } from "../../assets/check-solid.svg";
import { InputError } from "../../styles";

interface props {
  setNotChecked: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const Checkbox = ({ setNotChecked, handleChange, error, value }: props) => {
  function toggleCheck() {
    if (!value) {
      handleChange(true);
      setNotChecked(false);
    } else {
      handleChange(false);
      setNotChecked(true);
    }
  }

  return (
    <InputWrapper
      style={{
        border: `1px solid ${
          error ? "var(--base-color-error)" : "var(--base-color-border)"
        }`,
      }}
    >
      <FakeCheckBox
        style={{ backgroundColor: value ? "var(--base-color-link)" : "" }}
        onClick={toggleCheck}
      >
        {value && <CheckIcon />}
      </FakeCheckBox>
      <InputInfo>
        Li e estou de acordo com a{" "}
        <a href="/privacy-policy" title="Política de privacidade - Bcredi">
          Política de Privacidade
        </a>{" "}
        e a{" "}
        <a href="/use-policy" title="Política de uso - Bcredi">
          Política de Uso de Informações
        </a>
        .
      </InputInfo>
      {error && (
        <StyledInputError>Por favor confirme os termos de uso</StyledInputError>
      )}
    </InputWrapper>
  );
};

const FakeCheckBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--base-color-link);
  border-radius: 4px;
  cursor: pointer;
`;

const StyledInputError = styled(InputError)`
  top: 60px;
  @media (max-width: 600px) {
    top: 97px;
  }
`;

const InputInfo = styled.div`
  width: 267px;
  margin: 7px 5px 9px 12px;
  font-size: 12px;
  line-height: 20px;
  color: var(--base-color-pinkish-grey);

  > a {
    color: var(--base-color-link);
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 230px;
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

  > input {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 312px;
    height: 92px;
  }
`;

const CheckIcon = styled(CheckSvg)`
  width: 9.7px;
  height: 7.1px;
  color: var(--base-color-white);
`;

export default Checkbox;
