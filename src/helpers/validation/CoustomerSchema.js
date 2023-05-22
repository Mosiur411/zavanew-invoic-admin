import * as yup from "yup";
export const coustomerSchema = yup.object().shape({
    name: yup.string(),
    comphonyName: yup.string().required("comphonyName field can not be empty."),
    email: yup.string(),
    phone: yup.number().required("phone field can not be empty."),
    etin: yup.string(),
    resale: yup.string(),
    tobacco: yup.string(),
    country: yup.string().required("country field can not be empty."),
    city: yup.string().required("city field can not be empty."),
    address: yup.string().required("address field can not be empty."),
    zip_code: yup.string()
})
