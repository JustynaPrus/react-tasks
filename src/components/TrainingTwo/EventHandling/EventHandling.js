import { useState } from "react";

export const EventHandling = () => {
  const initialData = {
    human: {
      sex: "man",
      surname: "Detic",
    },
    accountBalance: 1000,
  };

  const [userData, setUserData] = useState(initialData);

  const hadleSexChange = () => {
    const userSex = userData.human.sex;
    setUserData();
  };
  return (
    <>
      <div>
        <h3>User</h3>
        <p>Surname: {userData.human.surname}</p>
        <p>Sex: {userData.human.sex}</p>
        <p>Account Balance: {userData.accountBalance}</p>
      </div>
      <div>
        <button onClick={hadleSexChange}>Zmień płeć użytkownika</button>
      </div>
    </>
  );
};
