import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productApi";
import { shopListApi } from "./api/shopListApi";
import authReducer from "./slices/authSlice";
import componentReducer from "./slices/componentSlice";
import currentListReducer from "./slices/currentListSlice";
import updateListReducer from "./slices/updatedListSlice";

export const store = configureStore({
    reducer: {
      componentReducer,
      authReducer,
      currentListReducer,
      updateListReducer,
      [productApi.reducerPath]: productApi.reducer,
      [shopListApi.reducerPath]: shopListApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, shopListApi.middleware)
})
