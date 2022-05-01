import { FlexBox, Container } from "./EventHandling.styles";
import { useEventHandling } from "./useEventHandling";

export const EventHandling = () => {
  const {
    handleSexChange,
    handleBuy,
    handleSell,
    userSurname,
    userSex,
    accountBalance,
  } = useEventHandling();

  return (
    <Container>
      <div>
        <h3>User</h3>
        <p>Surname: {userSurname}</p>
        <p>Sex: {userSex}</p>
        <p>Account Balance: {accountBalance}</p>
      </div>
      <FlexBox>
        <button onClick={handleSexChange}>Zmień płeć użytkownika</button>
        <button onClick={handleBuy}>Odejmij 500</button>
        <button onClick={handleSell}>Dodaj 500</button>
      </FlexBox>
    </Container>
  );
};
