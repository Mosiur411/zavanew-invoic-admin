import * as yup from "yup";
export const OrderSchema = yup.object().shape({
    payment: yup.string().required("payment name field can not be empty."),
    checkNumber: yup.string(),
    checkProviderName: yup.string()

})
