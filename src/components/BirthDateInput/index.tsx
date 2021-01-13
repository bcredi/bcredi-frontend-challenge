import React, { useState } from "react";
import styled from "styled-components";
import { InputError, Input } from "../../styles";

interface props {
  error: boolean;
  handleChange: any;
  value: string;
}

const BirthDateInput = ({ error, handleChange, value }: props) => {
  const [validBirthDate, setValidBirthDate] = useState(true);

  function validateBirthDate(date: string) {
    const match = date.match(
      /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/g
    );

    console.log("Match? ", match); // PRINT

    if (match !== null) {
      const newDate = new Date(date);
      console.log("Date parse:", newDate); // PRINT
      if (newDate !== null) {
        setValidBirthDate(true);
      } else {
        setValidBirthDate(false);
      }
    } else {
      setValidBirthDate(false);
    }
  }

  return (
    <InputWrapper>
      <InputLabel>Data de nascimento</InputLabel>
      <StyledInput
        type="text"
        placeholder="DD/MM/AAAA"
        maxLength={8}
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
      {/* <input
        type="text"
        name="input"
        placeholder="DD-MM-YY"
        required
        pattern="(?:30))|(?:(?:0\[13578\]|1\[02\])-31))-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])"
        title="Enter a date in this format YYYY-MM-DD"
      /> */}
      <StyledInputError>
        {!validBirthDate
          ? "Data inválida."
          : error
          ? "O campo não pode ser vazio."
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
    margin-top: 35px;
  }
`;

const StyledInput = styled(Input)`
  width: auto;
`;

const StyledInputError = styled(InputError)`
  top: 78px;

  @media (max-width: 600px) {
    top: 112px;
  }
`;

export default BirthDateInput;
