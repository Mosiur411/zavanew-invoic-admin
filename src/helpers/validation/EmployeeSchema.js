import * as yup from "yup";
export const employeeSchema = yup.object().shape({
    name: yup.string()
        .required("name field can not be empty."),
    email: yup.string()
        .required("email field can not be empty.")
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "please type a valid email address."
        ),
    password: yup.string()
        .required("password field can not be empty.")
        .min(6, "password must contain at least 6 characters."),

    phone: yup.number(),
    nid: yup.string().required("nid field can not be empty.")
        .min(6, "password must contain at least 6 characters."),
    country: yup.string(),
    city: yup.string(),
    address: yup.string(),
    zip_code: yup.string()

})
export const employeeEditSchema = yup.object().shape({
    name: yup.string()
        .required("name field can not be empty."),
    phone: yup.number(),
    nid: yup.string().required("nid field can not be empty.")
        .min(6, "password must contain at least 6 characters."),
    country: yup.string(),
    city: yup.string(),
    address: yup.string(),
    zip_code: yup.string()

})
