import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, prodcutscleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useProduct = () => {
  const params = useParams();
  const prefix = params.prefix;
  const dispath = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const whishlistItems = useAppSelector((state) => state.wishlist.itemsId);
  const { loading, error, records } = useAppSelector((state) => state.products);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  const productInfo = records.map((e) => ({
    isAuthenticated: userAccessToken ? true : false,
    ...e,
    quantity: cartItems[e.id] || 0,
    isLiked: whishlistItems.includes(e.id),
  }));
  useEffect(() => {
    const promis = dispath(actGetProducts(params.prefix as string));
    return () => {
      dispath(prodcutscleanUp());
      promis.abort();
    };
  }, [dispath, params]);
  return { loading, error, productInfo, prefix };
};
