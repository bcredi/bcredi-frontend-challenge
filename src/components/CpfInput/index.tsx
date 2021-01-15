import React, { useState } from "react";
import styled from "styled-components";
import { InputError, Input } from "../../styles";

interface props {
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: any;
  value: string;
}

const rejectedCpfs = [
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
];

function validateCpfFormat(cpf: string) {
  if (cpf !== "") {
    const match = cpf.match(/\d\d\d[.]\d\d\d[.]\d\d\d[-]\d\d$/);
    const correctFormat = match !== null;
    if (correctFormat) {
      const stringOnlyNumbers = cpf.replace(/[.-]/g, "");
      if (rejectedCpfs.includes(stringOnlyNumbers)) {
        return "repetitive numbers";
      } else {
        const cpfNumbersArray = stringOnlyNumbers.split("").map((n) => +n);

        const sumNumberFirstDigit = cpfNumbersArray
          .slice(0, 9)
          .map((n, index) => n * (10 - index))
          .reduce((a, b) => a + b, 0);

        const sumNumberSecondDigit = cpfNumbersArray
          .slice(0, 10)
          .map((n, index) => n * (11 - index))
          .reduce((a, b) => a + b, 0);

        var restDigitOne = (sumNumberFirstDigit * 10) % 11;
        var restDigitTwo = (sumNumberSecondDigit * 10) % 11;

        if (restDigitOne === 10 || restDigitOne === 11) {
          restDigitOne = 0;
        }
        if (restDigitTwo === 10 || restDigitTwo === 11) {
          restDigitTwo = 0;
        }
        if (
          restDigitOne !== cpfNumbersArray[9] ||
          restDigitTwo !== cpfNumbersArray[10]
        ) {
          return "rest does not match the digits";
        } else {
          return 1;
        }
      }
    } else {
      return "incorrect format";
    }
  } else {
    return "empty cpf";
  }
}

const CpfInput = ({ setEmpty, error, handleChange, value }: props) => {
  const [validCpf, setValidCpf] = useState(true);

  function validateCpf(cpf: string) {
    const cpfValidationStatus = validateCpfFormat(cpf);
    if (cpfValidationStatus === 1) {
      setEmpty(false);
      return setValidCpf(true);
    } else if (cpfValidationStatus === "empty cpf") {
      setValidCpf(true);
    } else {
      setEmpty(false);
      return setValidCpf(false);
    }
  }

  return (
    <InputWrapper>
      <InputLabel>CPF</InputLabel>
      <StyledInput
        required
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
        onInvalid={() => setEmpty(true)}
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
          ? "O campo é obrigatório"
          : null}
      </StyledInputError>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 148px;
  display: flex;
  flex-direction: column;
  position: relative;

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

  @media (max-width: 600px) {
    top: 84px;
  }
`;

export { CpfInput, validateCpfFormat, rejectedCpfs };
