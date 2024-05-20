import { TProduct } from "@customType/product/Product";
import style from "./CartItemSubTotal.module.css";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { actPlaceOrder } from "@store/Order/orderSlice";
import { clearCartAfterPlaceOrder } from "@store/Cart/cartSlice";

type CartItemSubTotal = { products: TProduct[]; accessToken: string | null };

const CartItemSubTotal = ({ products, accessToken }: CartItemSubTotal) => {
  const dispatch = useAppDispatch();
  const [showModal, setshowModal] = useState(false);
  const [Error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState(false);
  const subTotal = products.reduce((acc, el) => {
    return el.quantity && typeof el.quantity === "number"
      ? acc + el.quantity * el.price
      : acc;
  }, 0);
  const modalHandler = () => {
    setshowModal(!showModal);
  };
  const orderHandler = () => {
    dispatch(actPlaceOrder(subTotal))
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setshowModal(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <>
      <Modal show={showModal} onHide={modalHandler} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Placing Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to place order with subtotal:
          {subTotal.toFixed(2)}
          {Error && !loading && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{Error}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalHandler}>
            Close
          </Button>
          <Button
            variant="info"
            style={{ color: "white" }}
            onClick={orderHandler}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm"></Spinner>
                loading...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <div className={style.container}>
          <span>Subtotal:</span>
          <span>{subTotal.toFixed(2)} EGP</span>
        </div>
      </div>
      {accessToken && (
        <div>
          <div className={style.container}>
            <span></span>
            <span>
              <Button
                variant="info"
                style={{ color: "white" }}
                onClick={modalHandler}
              >
                Place Order
              </Button>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemSubTotal;
