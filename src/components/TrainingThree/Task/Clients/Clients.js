import { useGetData } from "../GetData/useGetData";
import { ClientForm } from "../ClientForm/ClientForm";
import { useClientForm } from "../ClientForm/useClientForm";

export const Clients = () => {
  const API = "http://localhost:3000/clients";
  const { data } = useGetData(API);
  const { initialValues, validationSchema, onSubmit, clientData } =
    useClientForm();

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
      <div>
        {clientData.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
      <ClientForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </>
  );
};
