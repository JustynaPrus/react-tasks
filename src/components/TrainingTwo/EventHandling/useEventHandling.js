import { useState } from "react";

export const useEventHandling = () => {
  const initialData = {
    human: {
      sex: "man",
      surname: "Detic",
    },
    accountBalance: 1000,
  };

  const [userSurname, setUserSurname] = useState(initialData.human.surname);
  const [userSex, setUserSex] = useState(initialData.human.sex);
  const [accountBalance, setAccountBalance] = useState(
    initialData.accountBalance
  );

  const handleSexChange = () => {
    const newSex = userSex === "man" ? "woman" : "man";
    setUserSex(newSex);
  };
  const handleBuy = () => {
    if (accountBalance > 0) {
      setAccountBalance(accountBalance - 500);
    } else {
      alert("Nie masz wystarczająco środków!");
    }
  };
  const handleSell = () => {
    setAccountBalance(accountBalance + 500);
  };
  return {
    handleSexChange,
    handleBuy,
    handleSell,
    userSurname,
    userSex,
    accountBalance,
  };
};
