import Heading from "@componets/common/heading/Heading";
import CartItemList from "@componets/ecommerce/CartItemList/CartItemList";
import CartItemSubTotal from "@componets/ecommerce/CartItemSubTotal/CartItemSubTotal";
import { Loading } from "@feedback/index";
import { useCart } from "@hooks/useCart";
import { LottiHandler } from "@feedback/LottiHandler/LottiHandler";
const Cart = () => {
  const {
    loading,
    error,
    qunatityHandler,
    removeItem,
    products,
    accessToken,
    placeOrderStatus,
  } = useCart();
  return (
    <div>
      <Heading title="Cart" />
      {products.length ? (
        <Loading type="cart" loading={loading} error={error}>
          <CartItemList
            products={products}
            qunatityHandler={qunatityHandler}
            removeItem={removeItem}
          />
          <CartItemSubTotal products={products} accessToken={accessToken} />
        </Loading>
      ) : placeOrderStatus === "succeeded" ? (
        <LottiHandler
          type="success"
          message="Your orderd has been placed successfully"
        />
      ) : (
        <LottiHandler type="empty" message="Your Cart Is Empty" />
      )}
    </div>
  );
};

export default Cart;
