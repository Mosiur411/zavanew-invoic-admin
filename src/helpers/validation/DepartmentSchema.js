import * as yup from "yup";
export const DepartmentSchema = yup.object().shape({
    department: yup.string()
    .required("Department field can not be empty.")
    .min(2, "Department must contain at least 6 characters."),
  })
