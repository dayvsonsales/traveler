import styled from "styled-components";

import logo from "../../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  padding-top: 32px;
  padding-bottom: 12px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.img.attrs({
  src: logo,
})``;

export const LoginButton = styled.button`
  background-color: #dde9f0;

  padding-top: 11px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 11px;

  border-radius: 10px;

  border: 1px solid transparent;

  font-family: "Heebo", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  text-align: right;

  color: #115d8c;
`;
