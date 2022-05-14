import { Link } from "react-router-dom";
import { SecondNav, StyledLink } from "./NavigationMenu.styles";

export const NavTrainingThree = () => {
  return (
    <>
      <SecondNav>
        <Link to="/trainingThree/task" style={{ textDecoration: "none" }}>
          <StyledLink>Task</StyledLink>
        </Link>
      </SecondNav>
    </>
  );
};
