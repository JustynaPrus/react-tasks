import { useGetData } from "../GetData/useGetData";
import { OrderForm } from "../OrderForm/OrderForm";

export const Orders = () => {
  const API = "http://localhost:3000/order";
  const { data } = useGetData(API);

  return (
    <>
      <p>Orders</p>
      {data.map((el, index) => (
        <div key={index}>
          <p>{el["order-details"]}</p>
        </div>
      ))}
      <OrderForm />
    </>
  );
};
