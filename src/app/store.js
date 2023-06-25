import { configureStore } from "@reduxjs/toolkit";
import { DepartmentApi } from "./services/department";
import authSlice from "./features/authSlice";
import { CategoriesApi } from "./services/categories";
import { SubCategoriesApi } from "./services/subCategories";
import { ChildSubCategoriesApi } from "./services/childsubCategories";
import { ProductApi } from "./services/product";
import { AuthApi } from "./services/authUser";
import { AddToCartApi } from "./services/addToCart";
import { OrderApi } from "./services/order";
import { EmployeeApi } from "./services/employee";
import { CoustomerApi } from "./services/coustomer";
import { SalesApi } from "./services/sales";
export const store = configureStore({
  reducer: {
    [DepartmentApi.reducerPath]: DepartmentApi.reducer,
    [CategoriesApi.reducerPath]: CategoriesApi.reducer,
    [SubCategoriesApi.reducerPath]: SubCategoriesApi.reducer,
    [ChildSubCategoriesApi.reducerPath]: ChildSubCategoriesApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [AddToCartApi.reducerPath]: AddToCartApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
    [EmployeeApi.reducerPath]: EmployeeApi.reducer,
    [CoustomerApi.reducerPath]: CoustomerApi.reducer,
    [SalesApi.reducerPath]: SalesApi.reducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat([
      DepartmentApi.middleware,
      CategoriesApi.middleware,
      SubCategoriesApi.middleware,
      ChildSubCategoriesApi.middleware,
      ProductApi.middleware,
      AuthApi.middleware,
      AddToCartApi.middleware,
      OrderApi.middleware,
      EmployeeApi.middleware,
      CoustomerApi.middleware,
      SalesApi.middleware,
    ]),
});
