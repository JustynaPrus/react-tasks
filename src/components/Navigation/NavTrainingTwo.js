import { Link } from "react-router-dom";
import { SecondNav, StyledLink } from "./NavigationMenu.styles";

export const NavTrainingTwo = () => {
  return (
    <>
      <SecondNav>
        <Link
          to="/trainingTwo/event_handling"
          style={{ textDecoration: "none" }}
        >
          <StyledLink>1. Obsługa zdarzeń</StyledLink>
        </Link>
        <Link
          to="/trainingTwo/component_table"
          style={{ textDecoration: "none" }}
        >
          <StyledLink>3. Komponent Table</StyledLink>
        </Link>
      </SecondNav>
    </>
  );
};
