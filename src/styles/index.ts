import styled from "styled-components";

export const Input = styled.input`
  width: 320px;
  height: 48px;
  margin: 7px 0 5px 0;
  border-radius: 3px;
  padding: 0 16px 0 14px;
  outline: none;
  cursor: text;

  @media (max-width: 600px) {
    width: 312px;
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
