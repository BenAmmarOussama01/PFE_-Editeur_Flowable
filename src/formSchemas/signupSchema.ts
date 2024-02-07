import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
  firstName: Yup.string().min(3).required("first name is required"),
  lastName: Yup.string().min(3).required("last name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("invalid email address"),
  password: Yup.string().required("password is required"),
});
