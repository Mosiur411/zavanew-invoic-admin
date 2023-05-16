import { configureStore } from "@reduxjs/toolkit";
import { DepartmentApi } from "./services/department";
import authSlice from "./features/authSlice";
import { CategoriesApi } from "./services/categories";
import { SubCategoriesApi } from "./services/subCategories";
import { ChildSubCategoriesApi } from "./services/childsubCategories";
import { ProductApi } from "./services/product";
export const store = configureStore({
  reducer: {
    [DepartmentApi.reducerPath]: DepartmentApi.reducer,
    [CategoriesApi.reducerPath]: CategoriesApi.reducer,
    [SubCategoriesApi.reducerPath]: SubCategoriesApi.reducer,
    [ChildSubCategoriesApi.reducerPath]: ChildSubCategoriesApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    auth:authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      DepartmentApi.middleware,
      CategoriesApi.middleware,
      SubCategoriesApi.middleware,
      ChildSubCategoriesApi.middleware,
      ProductApi.middleware,
    ]),
});