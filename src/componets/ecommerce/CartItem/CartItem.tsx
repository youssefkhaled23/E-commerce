import { Form, Button } from "react-bootstrap";
import style from "./CartItem.module.css";
import { TProduct } from "@customType/product/Product";
import { memo } from "react";
import { ProductInfo } from "../ProductInfo/ProductInfo";
type TProps = TProduct & {
  qunatityHandler: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
};
const { cartItem, cartItemSelection } = style;

const CartItem = memo(
  ({
    id,
    img,
    title,
    price,
    max,
    quantity,
    qunatityHandler,
    removeItem,
  }: TProps) => {
    const renderQuantity = Array(max)
      .fill(0)
      .map((_, i) => {
        const quantity = ++i;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });
    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      qunatityHandler(id, quantity);
    };
    return (
      <div className={cartItem}>
        <ProductInfo title={title} img={img} price={price} direction="column">
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
            onClick={() => removeItem(id)}
          >
            Remove
          </Button>
        </ProductInfo>
        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={changeQuantity}>
            {renderQuantity}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
