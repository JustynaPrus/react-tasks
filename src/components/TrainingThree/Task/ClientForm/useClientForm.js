import * as yup from "yup";
import { useState } from "react";

export const useClientForm = () => {
  const [clientData, setClientData] = useState([]);

  const initialValues = {
    name: "",
    surname: "",
    email: "",
  };
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Nie moze byc mniejszy od 4")
      .required("Imię jest wymagane"),
    surname: yup
      .string()
      .min(5, "Nie moze byc mniejszy od 5")
      .required("Nazwisko jest wymagane"),
    email: yup
      .string()
      .email("To nie jest poprawny email")
      .required("Email jest wymagany"),
  });
  const addClient = (values) => {
    setClientData([...clientData, values]);
    console.log(clientData);
  };
  console.log(clientData);
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    addClient(values);
    onSubmitProps.resetForm();
  };

  return { initialValues, validationSchema, onSubmit, clientData };
};
