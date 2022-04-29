import { NavTrainingOne } from "../../components/Navigation/NavTrainingOne";
import { NavigationMenu } from "../../components/Navigation/NavigationMenu";
import { Container } from "../../App.styles";

export const TrainingOne = () => {
  return (
    <>
      <Container>
        <NavigationMenu />
        <h1>Szkolenie 1</h1>
        <NavTrainingOne />
      </Container>
    </>
  );
};
