import { cartTotalQuantity } from "@store/Selectories";
import { useAppSelector } from "@store/hooks";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import Cart from "@assets/svg/cart.svg?react";
import Wishlist from "@assets/svg/wishlist.svg?react";

import style from "./HeaderLeftBar.module.css";

const { headerLeftBar } = style;
export const HeaderLeftBar = () => {
  const whishListTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartItemsTotalQuantity = useAppSelector(cartTotalQuantity);
  return (
    <div className={headerLeftBar}>
      <HeaderCounter
        title="Wishlist"
        totalQuantity={whishListTotalQuantity}
        to="whislist"
        svgIcon={<Wishlist title="Wishlist Icon" />}
      />
      <HeaderCounter
        title="Cart"
        totalQuantity={cartItemsTotalQuantity}
        to="cart"
        svgIcon={<Cart title="Cart Icon" />}
      />
    </div>
  );
};
