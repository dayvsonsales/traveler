import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background: #f5f8fa repeat;

  padding-left: 160px;
  padding-right: 160px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const TitleLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 29%;
  margin-right: 163px;
`;

export const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 74px;

  color: #123952;
`;

export const SubTitle = styled.div`
  font-family: "Heebo", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  margin-bottom: 48px;

  color: #617480;
`;

export const FindOutButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 23px 56px;

  background: #f25d27;
  border-radius: 10px;

  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  color: #ffffff;
`;
