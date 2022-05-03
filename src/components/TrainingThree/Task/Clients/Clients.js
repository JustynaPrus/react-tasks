import { useGetData } from "../GetData/useGetData";
import { ClientForm } from "../ClientForm/ClientForm";

export const Clients = () => {
  const API = "http://localhost:3000/clients";
  const { data } = useGetData(API);

  return (
    <>
      <p>Clients</p>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.surname}</p>
          <p>{item.email}</p>
        </div>
      ))}
      <ClientForm />
    </>
  );
};
