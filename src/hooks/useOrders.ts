import { TProduct } from "@customType/product/Product";
import { actGetOrder } from "@store/Order/orderSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { resetOrderStatus } from "@store/Order/orderSlice";
const useOrders = () => {
  const dispatch = useAppDispatch();
  const { error, loading, orderList } = useAppSelector((state) => state.orders);

  const [showModal, setshowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

  const detailsHandler = (id: number) => {
    const productDetails = orderList.find((e) => e.id == id);
    const items = productDetails?.items ?? [];
    setshowModal(true);
    setSelectedProduct((prev) => [...prev, ...items]);
  };
  useEffect(() => {
    const promes = dispatch(actGetOrder());
    return () => {
      dispatch(resetOrderStatus());
      promes.abort();
    };
  }, [dispatch]);

  const closeModalHandler = () => {
    setshowModal(false);
    setSelectedProduct([]);
  };
  return {
    error,
    loading,
    showModal,
    selectedProduct,
    detailsHandler,
    closeModalHandler,
    orderList,
  };
};

export default useOrders;
