import * as yup from "yup";
export const SubCategoriesSchema = yup.object().shape({
    development_id: yup.string()
        .required("development field can not be empty."),
    categorie_id: yup.string()
        .required("Categories field can not be empty."),
    name: yup.string()
        .required("Categories field can not be empty.")
        .min(2, "Categories must contain at least 6 characters."),
})
