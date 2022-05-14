import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./TaskNavigation.styles";

export const TaskNavigation = () => {
  return (
    <>
      <StyledNav>
        <Link
          to="/trainingThree/task/clients"
          style={{ textDecoration: "none" }}
        >
          <StyledLink>Klienci</StyledLink>
        </Link>
        <Link
          to="/trainingThree/task/orders"
          style={{ textDecoration: "none" }}
        >
          <StyledLink>Zamówienia</StyledLink>
        </Link>
      </StyledNav>
    </>
  );
};
