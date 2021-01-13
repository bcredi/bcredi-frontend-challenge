import React, { useState } from "react";
import Hero from "../../components/Hero";
import RegisterForm from "../../components/RegisterForm";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import heroImage from "../../assets/rawpixel-411166-unsplash@2x.png";

const Register = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setRegistered(true);
    setTimeout(() => setRegistered(false), 3000);
  };

  const quote =
    "Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido.";
  const author = "Camila Bragança";
  const company = "Sideral Tecnologia";

  return (
    <PageWrapper>
      <Hero image={heroImage} quote={quote} author={author} company={company} />
      <RegisterWapper>
        <SuccessBar className={registered ? "visible" : ""}>
          Parabéns! Cadastro realizado com sucesso!
        </SuccessBar>
        <Header>
          <Logo className="logo" />
        </Header>
        <RegisterForm handleSuccess={handleRegisterSuccess} />
      </RegisterWapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
`;

const RegisterWapper = styled.div`
  width: 56.8%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  .visible {
    visibility: visible !important;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @-webkit-keyframes fadein {
    from {
      top: -64px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
  @keyframes fadein {
    from {
      top: -64;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeout {
    from {
      top: 0;
      opacity: 1;
    }
    to {
      top: -64px;
      opacity: 0;
    }
  }
  @keyframes fadeout {
    from {
      top: 0;
      opacity: 1;
    }
    to {
      top: -64px;
      opacity: 0;
    }
  }
`;

const SuccessBar = styled.div`
  visibility: hidden;
  width: 56.796875%;
  height: 64px;
  padding-top: 20px;
  background-color: var(--base-color-success);
  position: absolute;
  color: var(--base-color-white);
  text-align: center;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 56px;

  .logo {
    margin: 16px 32px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 64px;
    border-bottom: 1px solid #e6e6e6;

    .logo {
      margin: 20px 32px;
    }
  }
`;

export default Register;
