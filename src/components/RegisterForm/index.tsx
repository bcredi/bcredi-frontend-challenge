import React, { FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import EmailInput from "../EmailInput";
import Checkbox from "../CheckBox";
import BirthDateInput from "../BirthDateInput";
import CpfInput from "../CpfInput";
/* import bcrypt from "bcryptjs"; */

interface User {
  email: string;
  cpf: string;
  birthDate: Date;
  password: string;
}

interface props {
  handleSuccess: () => void;
}

const RegisterFormContainer = ({ handleSuccess }: props) => {
  // Estados de controle
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisibility] = useState(false);

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
    setUserData({} as User);
  }

  console.log("USER DATA: ", userData); // PRINT
  console.log("Aceito os termos: ", readCheck); // PRINT

  /* const onSubmit = (userData) => {
    userData.password = bcrypt.hashSync(userData.password, 10);
    dispatch(saveUserInfo(userData));
    setRegistered(true);
    reset(defaultValues);
    setUserData(defaultValues);
    setTimeout(() => setRegistered(false), 3000);
  }; */

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (Event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = Event.target
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
          handleChange={handleChange}
          error={emailError}
          value={userData.email}
        />

        <FlexGroup>
          <CpfInput
            error={cpfError}
            handleChange={handleChange}
            value={userData.cpf}
          />
          <BirthDateInput
            error={birthDateError}
            handleChange={handleChange}
            value={userData.birthDate && userData.birthDate.toString()}
          />
        </FlexGroup>

        {/*           <PasswordInput
            register={register}
            handleChange={handleChange}
            errors={errors}
            togglePassword={togglePassword}
            passwordVisible={passwordVisible}
            applyMask={applyMask}
            userData={userData}
          /> */}
        <Checkbox
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
  margin-top: 88px;
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
  }
`;

const RegisterFormWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 38px;

  @media (max-width: 600px) {
    width: 312px;
    height: 64px;
    margin-top: 84px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .register__input-wrapper {
    position: relative;
    text-align: left;
    margin-top: 23px;
  }

  .register__label {
    width: 320px;
    font-size: 14px;
    line-height: 18px;
    color: var(--base-color-warm-grey);
    text-align: left;
    margin-top: 23px;
  }

  .register__label--small {
    width: 148px;
  }

  .register__message {
    width: 320px;
    font-size: 14px;
    line-height: 18px;
    color: var(--base-color-error);
    text-align: left;
    position: absolute;
  }

  .register__container {
    width: 320px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .register__small-input-container {
    width: 148px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .register__input--toggle-eye {
    position: relative;
    display: flex;
  }
  i.register__icon--eye {
    position: absolute;
    top: 38%;
    right: 5%;
    color: var(--base-color-warm-grey);
  }

  i.register__icon--eye:hover {
    color: var(--base-color-text);
    cursor: pointer;
  }
`;

const FlexGroup = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;

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
  margin-top: 48px;
  color: var(--base-color-white);
  cursor: pointer;
  position: relative > svg {
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
  position: relative;
  left: -90px;
`;

/* const StyledInput = styled.input`
  height: 48px;
  width: ${(props) => props.width};
  margin: 7px auto 5px auto;
  border-radius: 3px;
  padding-left: 14px;
  outline: none;

  &:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const StyledMessage = styled.div`
  position: absolute;
  top: "78px";
  left: "0px";
`;

const CheckboxContainer = styled.div`
  height: 56px;
  width: 320px;
  margin: 31px auto 48px auto;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  padding-left: 14px;
  text-align: left;
  display: flex;
  flex-direction: row;
  position: relative;

  .register__input--checkbox {
    width: 24px;
    height: 24px;
    margin-top: 16px;
  }

  .register__checkbox-label {
    width: 267px;
    height: 40px;
    margin: 7px 5px 9px 12px;
    font-size: 12px;
    line-height: 20px;
    color: var(--base-color-pinkish-grey);
  }

  .register__checkbox-label > a {
    color: #4c8afe;
    text-decoration: none;
  }
`; */

export default RegisterFormContainer;
