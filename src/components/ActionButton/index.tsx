import React from "react";
import { ReactComponent as LockSvg } from "../../assets/lock-solid.svg";
import styled from "styled-components";

interface props {
  text: string;
  type: "submit" | "reset";
}

const ActionButton = ({ text, type }: props) => {
  return (
    <Button type={type}>
      <LockIcon />
      <p>{text}</p>
    </Button>
  );
};

const Button = styled.button`
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

const LockIcon = styled(LockSvg)`
  width: 10px;
  height: 12.3px;
  position: relative;
  left: 31px;
`;

export default ActionButton;
