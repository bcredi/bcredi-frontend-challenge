import React, { useState } from "react";
import styled from "styled-components";
import { InputError, Input } from "../../styles";

interface props {
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: any;
  value: string;
}

const BirthDateInput = ({ setEmpty, error, handleChange, value }: props) => {
  const [validBirthDate, setValidBirthDate] = useState(true);

  function validateFormat(date: string): boolean {
    const match = date.match(
      /^([1-9]|0[1-9]|[12][0-9]|3[01])[/]([1-9]|0[1-9]|1[012])[/](19|20)\d\d$/
    );
    return match !== null;
  }

  function validateBirthDate(date: string) {
    if (date !== "") {
      setEmpty(false);
      const correctFormat = validateFormat(date);

      console.log("Match? ", correctFormat); // PRINT

      if (correctFormat) {
        const currentYear = new Date().getFullYear();
        const monthMaxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const [day, month, year] = date.split("/").map((s) => +s); // Conversão para int

        if (year <= currentYear) {
          // months - fev
          if (month === 1 || month > 2) {
            if (day > monthMaxDays[month - 1]) {
              setValidBirthDate(false);
              return;
            } else {
              setValidBirthDate(true);
              return;
            }
          }

          // fev
          if (month === 2) {
            const leapYear =
              (!(year % 4) && year % 100) || (!(year % 400) as boolean);
            if (!leapYear && day >= 29) {
              setValidBirthDate(false);
              return;
            } else if (leapYear && day > 29) {
              setValidBirthDate(false);
              return;
            } else {
              setValidBirthDate(true);
              return;
            }
          }
        } else {
          setValidBirthDate(false);
          return;
        }
      } else {
        setValidBirthDate(false);
        return;
      }
    }
  }

  return (
    <InputWrapper>
      <InputLabel>Data de nascimento</InputLabel>
      <StyledInput
        required
        type="text"
        placeholder="DD/MM/AAAA"
        maxLength={10}
        name="birthDate"
        value={value}
        onChange={(e) => {
          e.target.value = e.target.value.replace(
            /^(\d{2})(\d{2})(\d{4})$/,
            "$1/$2/$3"
          );
          handleChange(e);
        }}
        onBlur={(e) => validateBirthDate(e.target.value)}
        onInvalid={() => setEmpty(true)}
        style={{
          border: `1px solid ${
            error || !validBirthDate
              ? "var(--base-color-error)"
              : "var(--base-color-border)"
          }`,
          color: `${
            error || !validBirthDate
              ? "var(--base-color-error"
              : "var(--base-color-text)"
          }`,
        }}
      />
      <StyledInputError>
        {!validBirthDate
          ? "Data inválida"
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
`;

const InputLabel = styled.label`
  width: 148px;
  font-size: 14px;
  line-height: 18px;
  color: var(--base-color-warm-grey);
  text-align: left;

  @media (max-width: 600px) {
    width: 312px;
    margin-top: 30px;
  }
`;

const StyledInput = styled(Input)`
  width: auto;
`;

const StyledInputError = styled(InputError)`
  top: 78px;

  @media (max-width: 600px) {
    top: 114px;
  }
`;

export default BirthDateInput;
