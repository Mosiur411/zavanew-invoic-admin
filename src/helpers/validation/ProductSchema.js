import * as yup from "yup";
export const ProductSchema = yup.object().shape({
    product_name: yup.string()
        .required("Prouct name field can not be empty.")
        .min(2, " must contain at least 6 characters."),
    upc: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    upcBox: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    cost: yup.number(),
    price: yup.number().required("Price cost field can not be empty."),
    quantity: yup.number().required("Quantity cost field can not be empty.")

})
