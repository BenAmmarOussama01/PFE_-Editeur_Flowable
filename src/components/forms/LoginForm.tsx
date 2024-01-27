import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("invalid email address"),
    password: Yup.string().required("password is required"),
  });
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div className="mb-5">
          <Field
            type="email"
            name="email"
            placeholder="your email"
            className="p-2 rounded"
          />
          <ErrorMessage name="email" component="div" />
        </div>

        <div className="mb-5">
          <Field
            type="password"
            name="password"
            placeholder="your password"
            className="p-2 rounded"
          />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit" className="w-full py-2">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
