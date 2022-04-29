import { Link } from "react-router-dom";

export const NavigationMenu = () => {
  return (
    <>
      <nav>
        <Link to="/trainingOne">Szkolenie 1</Link>
        <Link to="/trainingTwo">Szkolenie 2</Link>
      </nav>
    </>
  );
};
