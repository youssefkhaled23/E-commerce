import CartItem from "../CartItem/CartItem";
import { TProduct } from "@customType/product/Product";
type CartItemList = { products: TProduct[] , 
  qunatityHandler : (id : number , quantity : number) => void
  removeItem : (id : number ) => void
};
const CartItemList = ({ products ,qunatityHandler ,removeItem  }: CartItemList) => {
  const render = products.map((e) => {
    return <CartItem key={e.id} {...e} qunatityHandler={qunatityHandler} removeItem={removeItem} />;
  });
  return <div>{render}</div>;
};
export default CartItemList;