import { Link } from "react-router-dom";

export const NavTrainingOne = () => {
  return (
    <>
      <nav>
        <Link to="/trainingOne/task_1_2_3">zadanie 1_2_3</Link>
        <Link to="/trainingOne/task_4">zadanie 4</Link>
        <Link to="/trainingOne/task_5">zadanie 5</Link>
      </nav>
    </>
  );
};
