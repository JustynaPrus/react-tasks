import { useState } from "react";
import { Container } from "./ComponentTable.styles";

export const ComponentTable = ({ data }) => {
  const column = Object.keys(data);
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <div className={`${!isClicked ? "small_table" : "big_table"}`}>
        <p>name</p>
        <p>email</p>
        <p>phone</p>
        {isClicked ? (
          <>
            <p>adres</p>
            <p>strona</p>
            <p>firma</p>
          </>
        ) : null}
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        {isClicked ? (
          <>
            <div>
              <p>{data.address.street}</p>
              <p>{data.address.suite}</p>
              <p>{data.address.city}</p>
            </div>
            <p>{data.website}</p>
            <p>{data.company.name}</p>
          </>
        ) : null}
      </div>
      <button onClick={handleClicked}>Pokaż więcej</button>
    </Container>
  );
};
