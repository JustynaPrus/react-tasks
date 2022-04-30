import styled from "styled-components";

export const Wrapper = styled.div`
  width: 250px;
  height: 300px;
  margin: 20px;
  border: solid 3px #3399ff;
  background-position: center;
  box-shadow: 2px 8px 12px #888888;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  padding-top: 10px;
  background-position: center;
`;

export const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    max-width: 150%;
  }
`;

export const FlexBox = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
  border-top: solid 3px #3399ff;
  div {
    display: flex;
    justify-content: space-evenly;
    padding-top: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
