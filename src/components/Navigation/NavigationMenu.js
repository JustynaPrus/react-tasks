import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./NavigationMenu.styles";

export const NavigationMenu = () => {
  return (
    <>
      <StyledNav>
        <Link to="/react-tasks/" style={{ textDecoration: "none" }}>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link to="/react-tasks/trainingOne" style={{ textDecoration: "none" }}>
          <StyledLink>Szkolenie 1</StyledLink>
        </Link>
        <Link to="/react-tasks/trainingTwo" style={{ textDecoration: "none" }}>
          <StyledLink>Szkolenie 2</StyledLink>
        </Link>
        <Link
          to="/react-tasks/trainingThree"
          style={{ textDecoration: "none" }}
        >
          <StyledLink>Szkolenie 3</StyledLink>
        </Link>
      </StyledNav>
    </>
  );
};
