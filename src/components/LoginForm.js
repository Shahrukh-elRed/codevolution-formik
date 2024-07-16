import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "@chakra-ui/react";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="chakraInput"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="chakraInput"
            type="password"
            label="Password"
            name="password"
          />
          <Button type="submit" disabled={!formik.isValid}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
