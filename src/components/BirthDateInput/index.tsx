import React, { useState } from "react";
import styled from "styled-components";
import { InputError, Input } from "../../styles";

interface props {
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  handleChange: any;
  value: string;
}

function validateDateFormat(date: string) {
  if (date !== "") {
    const match = date.match(
      /^([1-9]|0[1-9]|[12][0-9]|3[01])[/]([1-9]|0[1-9]|1[012])[/](19|20)\d\d$/
    );
    const correctFormat = match !== null;

    if (correctFormat) {
      const currentYear = new Date().getFullYear();
      const monthMaxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const [day, month, year] = date.split("/").map((s) => +s); // Conversão para int

      if (year <= currentYear) {
        // months - fev
        if (month === 1 || month > 2) {
          if (day > monthMaxDays[month - 1]) {
            return "day outside the month limits";
          } else {
            return 1;
          }
        }

        // fev
        if (month === 2) {
          const leapYear =
            (!(year % 4) && year % 100) || (!(year % 400) as boolean);
          if (!leapYear && day >= 29) {
            return "day outside the limits of February - not a leap year";
          } else if (leapYear && day > 29) {
            return "day outside the limits of February - leap year";
          } else {
            return 1;
          }
        }
      } else {
        return "year bigger than the current one";
      }
    } else {
      return "incorrect format";
    }
  } else {
    return "empty date";
  }
}

const BirthDateInput = ({ setEmpty, error, handleChange, value }: props) => {
  const [validBirthDate, setValidBirthDate] = useState(true);

  function validateDate(date: string) {
    const dateValidationStatus = validateDateFormat(date);
    if (dateValidationStatus === 1) {
      setEmpty(false);
      return setValidBirthDate(true);
    } else if (dateValidationStatus === "empty date") {
      setValidBirthDate(true);
    } else {
      setEmpty(false);
      return setValidBirthDate(false);
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
        onBlur={(e) => validateDate(e.target.value)}
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

export { BirthDateInput, validateDateFormat };
