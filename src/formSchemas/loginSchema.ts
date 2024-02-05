import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("invalid email address"),
  password: Yup.string().required("password is required").min(3),
});
