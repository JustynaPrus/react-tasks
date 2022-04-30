import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";

export const ExampleFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      count: 1,
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name jest wymagany"),
      count: yup
        .number()
        .min(1, "Nie moze byc mniejszy od 1")
        .required("Count is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <input name="name" onChange={formik.handleChange} />
          <p>{formik.touched.name && formik.errors.name}</p>
          <input name="count" type="number" onChange={formik.handleChange} />
          <p>{formik.touched.count && formik.errors.count}</p>
          <button type="submit">Save</button>
        </form>
      </FormikProvider>
    </div>
  );
};
