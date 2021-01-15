import React, { FormEvent, ReactNode } from "react";
import styled from "styled-components";
import { User, InputError } from "../../pages/Register/types";
import ActionButton from "../ActionButton";

interface props {
  formTitle: string;
  formDescription: string;
  handleSubmit: () => void;
  children?: ReactNode;
  footer?: ReactNode;
  setData: React.Dispatch<React.SetStateAction<User>>;
  data: User;
  setFormErrors: React.Dispatch<React.SetStateAction<InputError>>;
  formErrors: InputError;
  readCheck: boolean;
}

const RegisterFormContainer = ({
  formTitle,
  formDescription,
  handleSubmit,
  children,
  footer,
  readCheck,
  formErrors,
  setFormErrors,
  setData,
  data,
}: props) => {
  function resetForm() {
    setData({ email: "", cpf: "", birthDate: "", password: "" });
    setFormErrors({
      birthDateError: false,
      cpfError: false,
      emailError: false,
      passwordError: false,
      readCheckError: false,
    });
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!data.email || data.email === "") {
      setFormErrors({ ...formErrors, emailError: true });
    } else if (!data.cpf || data.cpf === "") {
      setFormErrors({ ...formErrors, cpfError: true });
    } else if (!data.birthDate || data.birthDate === "") {
      setFormErrors({ ...formErrors, birthDateError: true });
    } else if (!data.password || data.password === "") {
      setFormErrors({ ...formErrors, passwordError: true });
    } else if (!readCheck) {
      setFormErrors({ ...formErrors, readCheckError: true });
    } else {
      handleSubmit();
      resetForm();
    }
  };

  return (
    <RegisterFormWrapper>
      <FormTitle className="form-title">{formTitle}</FormTitle>
      <FormText className="form-description">{formDescription}</FormText>
      <Form name="register" onSubmit={onSubmit}>
        {children}
        <ActionButton text="Cadastrar" type="submit" />
      </Form>
      <FormFooter className="form-footer">{footer}</FormFooter>
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
  margin-top: 36px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 312px;
    margin-top: 148px;
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

export default RegisterFormContainer;
