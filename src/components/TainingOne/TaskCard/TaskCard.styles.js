import styled from "styled-components";
import { device } from "../../../constant/BreakPoints";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${device.xs} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
