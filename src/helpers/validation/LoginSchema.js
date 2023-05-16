import * as yup from "yup";
export const LoginSchema = yup.object().shape({
    email: yup.string()
    .required("email field can not be empty.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "please type a valid email address."
    ),
  password: yup.string()
    .required("password field can not be empty.")
    .min(6, "password must contain at least 6 characters."),
  })
