import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./NavigationMenu.styles";

export const NavTrainingOne = () => {
  return (
    <>
      <StyledNav>
        <Link to="/trainingOne/task_1_2_3" style={{ textDecoration: "none" }}>
          <StyledLink>zadanie 1_2_3</StyledLink>
        </Link>
        <Link to="/trainingOne/task_4" style={{ textDecoration: "none" }}>
          <StyledLink>zadanie 4</StyledLink>
        </Link>
        <Link to="/trainingOne/task_5" style={{ textDecoration: "none" }}>
          <StyledLink>zadanie 5</StyledLink>
        </Link>
      </StyledNav>
    </>
  );
};
