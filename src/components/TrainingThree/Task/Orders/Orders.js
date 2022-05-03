import { useGetData } from "../GetData/useGetData";

export const Orders = () => {
  const API = "http://localhost:3000/order";
  const { data } = useGetData(API);

  return (
    <>
      <p>Orders</p>
      {data.map((el, index) => (
        <div key={index}>
          <p>{el.name}</p>
          <p>{el.surname}</p>
          <p>{el.email}</p>
        </div>
      ))}
    </>
  );
};
