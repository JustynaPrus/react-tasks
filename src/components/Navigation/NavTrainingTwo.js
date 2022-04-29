import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./NavigationMenu.styles";

export const NavTrainingtwo = () => {
  return (
    <>
      <StyledNav>
        <Link to="/trainingTwo/task_1" style={{ textDecoration: "none" }}>
          <StyledLink>zadanie 1</StyledLink>
        </Link>
      </StyledNav>
    </>
  );
};
