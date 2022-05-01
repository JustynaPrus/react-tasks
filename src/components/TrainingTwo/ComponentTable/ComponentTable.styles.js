import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div.small_table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
  }
  div.big_table {
    display: grid;
    grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;
    column-gap: 20px;
    row-gap: 10px;
  }
`;
