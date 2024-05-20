import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./Cart/cartSlice";
import wishlist from "./Wishlist/wishlistSlice";
import auth from "./auth/authSlice";
import orders from "./Order/orderSlice";

const persistedConfig = {
  key: "root",
  storage,
  whiteList: ["cart", "auth"],
};

const authRootConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const cartRootConfig = {
  key: "cart",
  storage,
  whiteList: ["items"],
};

const rootReducers = combineReducers({
  auth: persistReducer(authRootConfig, auth),
  products,
  categories,
  orders,
  cart: persistReducer(cartRootConfig, cart),
  wishlist: wishlist,
});

const persistedReducer = persistReducer(persistedConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefalutMiddleware) => {
    return getDefalutMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST],
      },
    });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store);
export { store, persistor };
