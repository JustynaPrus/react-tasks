import { Formik, Form, Field, ErrorMessage } from "formik";

export const ClientForm = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Imię: </label>
          <Field name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="name">Nazwisko: </label>
          <Field name="surname" />
          <ErrorMessage name="surname" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Field name="email" />
          <ErrorMessage name="email" />
        </div>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};
