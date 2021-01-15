import styled from "styled-components";

// Common styles

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
`;

export const RegisterWapper = styled.div`
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

export const SuccessBar = styled.div`
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

export const Header = styled.div`
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

export const InputWrapper = styled.div`
  width: 320px;
  position: relative;
  text-align: left;
  margin-top: 30px;

  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }

  @media (max-width: 600px) {
    width: 312px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin: 7px 0 5px 0;
  border-radius: 3px;
  padding: 0 16px 0 14px;
  outline: none;
  cursor: text;

  @media (max-width: 600px) {
    width: 312px;
    height: 56px;
  }
`;

export const InputError = styled.div`
  width: 320px;
  font-size: 14px;
  line-height: 18px;
  color: var(--base-color-error);
  text-align: left;
  position: absolute;

  @media (max-width: 600px) {
    width: 312px;
  }
`;

export const HeroQuote = styled.p`
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 30px;
`;
export const HeroAuthorInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const FlexGroup = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 30px; */

  @media (max-width: 600px) {
    width: 312px;
    flex-direction: column;
  }
`;