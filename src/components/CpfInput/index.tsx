import React, { useState } from "react";
import styled from "styled-components";
import { InputError, Input } from "../../styles";

interface props {
  error: boolean;
  handleChange: any;
  value: string;
}

const CpfInput = ({ error, handleChange, value }: props) => {
  const [validCpf, setValidCpf] = useState(true);

  function validateCpf(cpf: string) {
    const match = cpf.match(/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/g);
    if (match !== null) {
      setValidCpf(true);
    } else {
      setValidCpf(false);
    }
  }

  return (
    <InputWrapper>
      <InputLabel>CPF</InputLabel>
      <StyledInput
        placeholder="000.000.000-00"
        maxLength={14}
        name="cpf"
        value={value && value}
        onChange={(e) => {
          e.target.value = e.target.value.replace(
            /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
            "$1.$2.$3-$4"
          );
          handleChange(e);
        }}
        onBlur={(e) => validateCpf(e.target.value)}
        style={{
          border: `1px solid ${
            error || !validCpf
              ? "var(--base-color-error)"
              : "var(--base-color-border)"
          }`,
          color: `${
            error || !validCpf
              ? "var(--base-color-error"
              : "var(--base-color-text)"
          }`,
        }}
      />
      <StyledInputError>
        {!validCpf
          ? "CPF não é válido"
          : error
          ? "O campo não pode ser vazio."
          : null}
      </StyledInputError>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 148px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 312px;
  }
}
`;

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

const StyledInput = styled(Input)`
  width: auto;
`;

const StyledInputError = styled(InputError)`
  top: 78px;
`;

export default CpfInput;
