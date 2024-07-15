import { Form, Formik } from "formik";
import * as Yup from "yup";

const FormikContainer = () => {
  const initialValues = {};
  const validationSchema = Yup.object({});
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
