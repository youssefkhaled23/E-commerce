import actCartItems from "@store/Cart/act/actCartItems";
import {
  ProductFullInfoCartCleanUp,
  changeQuantity,
  removeItems,
} from "@store/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";
import { resetOrderStatus } from "@store/Order/orderSlice";
export const useCart = () => {
  const dispath = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const { items, loading, error, ProductFullInfo } = useAppSelector(
    (state) => state.cart
  );
  const placeOrderStatus = useAppSelector((state) => state.orders.loading)
  const products = ProductFullInfo.map((e) => ({
    ...e,
    quantity: items[e.id],
  }));
  const qunatityHandler = useCallback(
    (id: number, quantity: number) => {
      dispath(changeQuantity({ id, quantity }));
    },
    [dispath]
  );
  const removeItem = useCallback(
    (id : number) => {
      dispath(removeItems(id));
    },
    [dispath]
  );
  useEffect(() => {
    const promis = dispath(actCartItems("ProductsFullinfo"));
    return () => {
      dispath(ProductFullInfoCartCleanUp());
      dispath(resetOrderStatus());
      promis.abort();
    };
  }, [dispath]);
  return {
    loading,
    error,
    ProductFullInfo,
    items,
    qunatityHandler,
    removeItem,
    products,
    accessToken,
    placeOrderStatus,
  };
};
