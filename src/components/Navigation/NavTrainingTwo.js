import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./NavigationMenu.styles";

export const NavTrainingtwo = () => {
  return (
    <>
      <StyledNav>
        <Link
          to="/trainingTwo/event_handling"
          style={{ textDecoration: "none" }}
        >
          <StyledLink>1. Obsługa zdarzeń</StyledLink>
        </Link>
      </StyledNav>
    </>
  );
};
