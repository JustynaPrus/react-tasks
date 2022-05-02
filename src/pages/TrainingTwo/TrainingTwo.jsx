import { NavTrainingTwo } from "../../components/Navigation/NavTrainingTwo";
import { NavigationMenu } from "../../components/Navigation/NavigationMenu";
import { Container } from "./TrainingTwo.styles";

export const TrainingTwo = () => {
  return (
    <>
      <Container>
        <NavigationMenu />
        <h1>Szkolenie 2</h1>
        <NavTrainingTwo />
      </Container>
    </>
  );
};
