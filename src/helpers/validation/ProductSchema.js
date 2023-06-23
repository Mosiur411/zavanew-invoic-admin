import * as yup from "yup";
export const ProductSchema = yup.object().shape({
    product_name: yup.string().min(2, " must contain at least 6 characters."),
    upc: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    upcBox: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    cost: yup.number(),
    saleing_Price: yup.number().required("Price cost field can not be empty."),
    quantity: yup.number().required("Quantity cost field can not be empty."),
    new_quantity: yup.number(),
    quantity_action: yup.string()
})
export const ProductUpdateSchema = yup.object().shape({
    product_name: yup.string(),
    upc: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    upcBox: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    cost: yup.number(),
    saleing_Price: yup.number(),
    quantity: yup.number(),
    new_quantity: yup.number(),
    stock: yup.number(),
    quantity_action: yup.string()
})


