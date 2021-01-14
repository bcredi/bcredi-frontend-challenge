import React, { FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import EmailInput from "../EmailInput";
import Checkbox from "../CheckBox";
import BirthDateInput from "../BirthDateInput";
import CpfInput from "../CpfInput";
import PasswordInput from "../PasswordInput";
/* import bcrypt from "bcryptjs"; */

interface User {
  email: string;
  cpf: string;
  birthDate: string;
  password: string;
}

interface props {
  handleSubmit: () => void;
}

const RegisterFormContainer = ({ handleSubmit }: props) => {
  // Estados de controle
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dados obtidos através dos inputs
  const [userData, setUserData] = useState<User>({} as User);
  const [readCheck, setReadCheck] = useState(false);

  // Error flags
  const [emailError, setEmailError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [readCheckError, setReadCheckError] = useState(false);

  function resetForm() {
    setUserData({ email: "", cpf: "", birthDate: "", password: "" });
  }

  console.log("USER DATA: ", userData); // PRINT
  console.log("Aceito os termos: ", readCheck); // PRINT

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    /* userData.password = bcrypt.hashSync(userData.password, 10); */
    if (!userData.email || userData.email === "") {
      setEmailError(true);
    } else if (!userData.cpf || userData.cpf === "") {
      setCpfError(true);
    } else if (!userData.birthDate || userData.birthDate === "") {
      setBirthDateError(true);
    } else if (!userData.password || userData.password === "") {
      setPasswordError(true);
    } else if (!readCheck) {
      setReadCheckError(true);
    } else {
      handleSubmit();
      resetForm();
    }
  };

  const handleChange = (Event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = Event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <RegisterFormWrapper>
      <FormTitle>Criar meu cadastro</FormTitle>
      <FormText>
        Para acompanhar sua contratação de crédito você utilizará seu e-mail e
        CPF.
      </FormText>
      <Form name="register" onSubmit={onSubmit}>
        <EmailInput
          setEmpty={setEmailError}
          handleChange={handleChange}
          error={emailError}
          value={userData.email}
        />
        <FlexGroup>
          <CpfInput
            setEmpty={setCpfError}
            error={cpfError}
            handleChange={handleChange}
            value={userData.cpf}
          />
          <BirthDateInput
            setEmpty={setBirthDateError}
            error={birthDateError}
            handleChange={handleChange}
            value={userData.birthDate && userData.birthDate.toString()}
          />
        </FlexGroup>
        <PasswordInput
          setEmpty={setPasswordError}
          handleChange={handleChange}
          error={passwordError}
          value={userData.password}
        />
        <Checkbox
          setNotChecked={setReadCheckError}
          handleChange={setReadCheck}
          error={readCheckError}
          value={readCheck}
        />
        <ActionButton type="submit" className="register-button">
          <LockIcon icon={faLock} />
          <p>Cadastrar</p>
        </ActionButton>
      </Form>
      <FormFooter>
        <p>
          Já fiz o meu cadastro. <a href="/login">Entrar agora.</a>
        </p>
      </FormFooter>
    </RegisterFormWrapper>
  );
};

const FormTitle = styled.div`
  width: 312px;
  height: 30px;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: var(--base-color-text);

  @media (min-width: 600px) {
    width: 320px;
    text-align: center;
  }
`;

const FormText = styled.div`
  height: 54px;
  font-size: 16px;
  line-height: 24px;
  color: var(--base-color-warm-grey);
  margin: 6px auto 0px auto;

  @media (min-width: 600px) {
    text-align: center;
  }
`;

const FormFooter = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--base-color-border);
  margin-top: 20px;
  margin-bottom: 16px;
  padding-top: 16px;

  > p {
    font-size: 14px;
    line-height: 18px;
    color: var(--base-color-warm-grey);
  }

  p > a {
    color: var(--base-color-link);
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 312px;
    margin-top: 81px;
    padding-top: 15.8px;
  }
`;

const RegisterFormWrapper = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 38px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 312px;
    margin-top: 84px;
    margin-bottom: 32px;
  }
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 23px;
`;

const FlexGroup = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 600px) {
    width: 312px;
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 48px;
  background-color: var(--base-color-link);
  border: none;
  border-radius: 3px;
  padding: 14px 10px;
  color: var(--base-color-white);
  cursor: pointer;
  margin-top: 48px;
  margin-bottom: auto;
  position: relative;
  transition: all ease-out 0.1s;

  &:hover {
    background-color: var(--base-color-link-hover);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }

  &: focus {
    outline: 0;
  }

  > svg {
    position: absolute !important;
  }

  > p {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 600px) {
    width: 312px;
  }
`;

const LockIcon = styled(FontAwesomeIcon)`
  width: 10px;
  height: 12.3px;
  position: relative;
  left: 31px;
`;

export default RegisterFormContainer;
