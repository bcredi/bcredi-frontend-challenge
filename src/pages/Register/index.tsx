import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import RegisterForm from "../../components/RegisterForm";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  HeroQuote,
  HeroAuthorInfo,
  PageWrapper,
  RegisterWapper,
  SuccessBar,
  Header,
  FlexGroup,
} from "../../styles";
import TextField from "../../components/TextField";
import { User, InputError } from "./types";
import Checkbox from "../../components/CheckBox";

export const rejectedCpfs = [
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

export function validateEmailFormat(email: string) {
  if (email !== "") {
    const match = email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,+`^*!'¨|;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const correctFormat = match !== null;
    if (correctFormat) {
      return 1;
    } else {
      return "incorrect format";
    }
  } else {
    return "empty email";
  }
}

export function validateCpfFormat(cpf: string) {
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

export function validateDateFormat(date: string) {
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
    return "empty birthDate";
  }
}

export function validatePasswordFormat(password: string) {
  if (password !== "") {
    if (password.length >= 8) {
      return 1;
    } else {
      return "incorrect format";
    }
  } else {
    return "empty password";
  }
}

const Register = () => {
  // States de controle
  const [registered, setRegistered] = useState(false);

  // Dados obtidos através dos inputs
  const [userData, setUserData] = useState<User>({} as User);
  const [formErrors, setFormErrors] = useState<InputError>({} as InputError);
  const [readCheck, setReadCheck] = useState(false);

  // Error flags
  const [emailError, setEmailError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [readCheckError, setReadCheckError] = useState(false);

  useEffect(() => {
    if (formErrors.emailError) {
      setEmailError(true);
    } else if (formErrors.cpfError) {
      setCpfError(true);
    } else if (formErrors.birthDateError) {
      setBirthDateError(true);
    } else if (formErrors.passwordError) {
      setPasswordError(true);
    } else if (formErrors.readCheckError) {
      setReadCheckError(true);
    }
  }, [formErrors]);

  const handleRegisterSuccess = () => {
    console.log(userData);
    setRegistered(true);
    setTimeout(() => setRegistered(false), 3000);
  };

  const handleChange = (Event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = Event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <PageWrapper>
      <Hero>
        <HeroQuote>
          Obtive crédito para capital de giro. O processo foi bem sucedido e
          tudo que foi abordado, foi cumprido.
        </HeroQuote>
        <HeroAuthorInfo>Camila Bragança,</HeroAuthorInfo>
        <HeroAuthorInfo>Sideral Tecnologia</HeroAuthorInfo>
      </Hero>
      <RegisterWapper>
        <SuccessBar className={registered ? "visible" : ""}>
          Parabéns! Cadastro realizado com sucesso!
        </SuccessBar>
        <Header>
          <Logo className="logo" />
        </Header>
        <RegisterForm
          handleSubmit={handleRegisterSuccess}
          formTitle="Criar meu cadastro"
          formDescription="Para acompanhar sua contratação de crédito você utilizará seu e-mail e
        CPF."
          footer={
            <p>
              Já fiz o meu cadastro. <a href="/login">Entrar agora.</a>
            </p>
          }
          setFormErrors={setFormErrors}
          formErrors={formErrors}
          readCheck={readCheck}
          data={userData}
          setData={setUserData}
        >
          <TextField
            setEmpty={setEmailError}
            handleChange={handleChange}
            error={emailError}
            value={userData.email}
            name={"email"}
            placeholder={"ana.maria@email.com"}
            validateValueFormat={validateEmailFormat}
          />
          <FlexGroup>
            <TextField
              setEmpty={setCpfError}
              error={cpfError}
              handleChange={handleChange}
              maxLength={14}
              value={userData.cpf}
              name={"cpf"}
              placeholder={"000.000.000-00"}
              validateValueFormat={validateCpfFormat}
            />
            <TextField
              setEmpty={setBirthDateError}
              error={birthDateError}
              handleChange={handleChange}
              maxLength={10}
              value={userData.birthDate}
              name={"birthDate"}
              placeholder={"DD/MM/AAAA"}
              validateValueFormat={validateDateFormat}
            />
          </FlexGroup>
          <TextField
            setEmpty={setPasswordError}
            handleChange={handleChange}
            error={passwordError}
            minLength={8}
            value={userData.password}
            name={"password"}
            placeholder={"Cadastre uma senha"}
            validateValueFormat={validatePasswordFormat}
          />
          <Checkbox
            setNotChecked={setReadCheckError}
            handleChange={setReadCheck}
            error={readCheckError}
            value={readCheck}
          />
        </RegisterForm>
      </RegisterWapper>
    </PageWrapper>
  );
};

export default Register;
