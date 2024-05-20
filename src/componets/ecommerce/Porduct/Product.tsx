import { addToCart } from "@store/Cart/cartSlice";
import style from "./Product.module.css";
import { TProduct } from "@customType/product/Product";
import { memo, useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Like from "@assets/svg/like.svg?react";
import { actWishlist } from "@store/Wishlist/wishlistSlice";
import DisLike from "@assets/svg/dislike.svg?react";
import { ProductInfo } from "../ProductInfo/ProductInfo";

const { maximumNotes, wishlistBtn } = style;

const Product = memo(
  ({
    title,
    img,
    price,
    max,
    quantity,
    id,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const dispatch = useDispatch();
    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setBtnDisabled(true);
    };
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const CurrentQuantity = max - (quantity ?? 0);
    const btnStop = CurrentQuantity <= 0 ? true : false;
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
      if (!btnDisabled) {
        return;
      }
      setBtnDisabled(true);
      const debounce = setTimeout(() => {
        setBtnDisabled(false);
      }, 300);
      return () => {
        clearTimeout(debounce);
      };
    }, [btnDisabled]);

    const wishlistToggle = () => {
      if (isAuthenticated) {
        if (!isLoading) {
          setisLoading(true);
          dispatch(actWishlist(id))
            .unwrap()
            .then(() => setisLoading(false))
            .catch(() => setisLoading(false));
        }
      } else {
        setshowModal(true);
      }
    };

    return (
      <>
        <Modal show={showModal} onHide={() => setshowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You need to login first to add this item to your wishlist.
          </Modal.Body>
        </Modal>
        <ProductInfo title={title} price={price} img={img}>
          <div className={wishlistBtn} onClick={wishlistToggle}>
            {isLoading ? (
              <Spinner animation="border" size="sm" variant="primary" />
            ) : isLiked ? (
              <DisLike />
            ) : (
              <Like />
            )}
          </div>
          <p className={maximumNotes}>
            {CurrentQuantity
              ? `You Can add ${CurrentQuantity} items`
              : "You Reach The Limit "}
          </p>
          <button
            className="btn btn-info text-white"
            onClick={() => addToCartHandler()}
            disabled={btnDisabled || btnStop}
          >
            {btnDisabled ? (
              <>
                <Spinner animation="border" size="sm" />
                Loading...
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
        </ProductInfo>
      </>
    );
  }
);

export default Product;
