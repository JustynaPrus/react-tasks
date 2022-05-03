import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";

export const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      "order-details": "",
    },
    validationSchema: yup.object().shape({
      "order-details": yup
        .string()
        .min(7, "Nie moze byc mniejszy od 7")
        .required("Zamówienie jest wymagane"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="order-details"
            onChange={formik.handleChange}
            values={formik.values["order-details"]}
          />
          <p>
            {formik.touched["order-details"] && formik.errors["order-details"]}
          </p>
          <button type="submit">Save</button>
        </form>
      </FormikProvider>
    </div>
  );
};
