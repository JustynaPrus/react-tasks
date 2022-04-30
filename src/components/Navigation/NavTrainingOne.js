import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./NavigationMenu.styles";

export const NavTrainingOne = () => {
  return (
    <>
      <StyledNav>
        <Link to="/trainingOne/task_card" style={{ textDecoration: "none" }}>
          <StyledLink>Zadanie Komponent Karty</StyledLink>
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
