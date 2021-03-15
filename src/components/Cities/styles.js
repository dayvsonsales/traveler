import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  margin-top: ${(props) => (props.top ? "90px" : "0")};
`;

export const CardCity = styled.div`
  background: #ffffff;

  border: 1.17814px solid #dce2e6;
  border-radius: 20px;
  overflow: hidden;

  margin-bottom: 20px;
`;

export const Photo = styled.img`
  width: 230px;
  height: 150px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Title = styled.div`
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22.8226px;
  line-height: 23px;

  color: #123952;
`;

export const Amount = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15.2151px;
  line-height: 25px;

  color: #617480;
`;
