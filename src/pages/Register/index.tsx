import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import RegisterForm from "../../components/RegisterForm";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import heroImage from "../../assets/rawpixel-411166-unsplash@2x.png";
import { HeroQuote, HeroAuthorInfo } from "../../styles";

const Register = () => {
  const [registered, setRegistered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoad") === null) {
      setAnimate(true);
      window.sessionStorage.setItem("firstLoad", "1");
    } else {
      setAnimate(false);
    }
  }, []);

  const handleRegisterSuccess = () => {
    setRegistered(true);
    setTimeout(() => setRegistered(false), 3000);
  };

  return (
    <PageWrapper>
      <Hero image={heroImage}>
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
        <RegisterForm handleSubmit={handleRegisterSuccess} />
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
  height: 100vh;
  width: 56.8%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  .visible {
    visibility: visible !important;
    -webkit-animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
    animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }

  @-webkit-keyframes fadeIn {
    from {
      top: -64px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      top: -64;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeOut {
    from {
      top: 0;
      opacity: 1;
    }
    to {
      top: -64px;
      opacity: 0;
    }
  }
  @keyframes fadeOut {
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
  position: fixed;
  z-index: 90;
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
