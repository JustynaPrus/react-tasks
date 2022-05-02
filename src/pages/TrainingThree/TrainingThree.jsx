import { NavTrainingThree } from "../../components/Navigation/NavTrainingThree";
import { NavigationMenu } from "../../components/Navigation/NavigationMenu";
import { Container } from "./TrainingThree.styles";

export const TrainingThree = () => {
  return (
    <>
      <Container>
        <NavigationMenu />
        <h1>Szkolenie 3</h1>
        <NavTrainingThree />
      </Container>
    </>
  );
};
