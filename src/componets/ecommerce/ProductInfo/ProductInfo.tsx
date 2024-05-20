import styles from "./ProductInfo.module.css";
type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  children?: React.ReactNode;
  direction?: "row" | "column";
  style?: React.CSSProperties;
  quantity?: number;
};

export const ProductInfo = ({
  title,
  img,
  price,
  children,
  style,
  direction = "row",
  quantity,
}: ProductInfoProps) => {
  return (
    <div className={`${styles[`product-${direction}`]}`} style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${styles[`productInfo-${direction}`]}`}>
        <h2 title={title}>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        {quantity && <h3>Total Quantity: {quantity}</h3>}
        {quantity && <h3>Total Price: {quantity * price}</h3>}
        {children}
      </div>
    </div>
  );
};
