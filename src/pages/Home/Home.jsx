import { NavigationMenu } from "../../components/Navigation/NavigationMenu";
import { Container } from "./Home.styles";

export const Home = () => {
  return (
    <>
      <Container>
        <NavigationMenu />
        <h1>Zadania z Reacta</h1>
      </Container>
    </>
  );
};
