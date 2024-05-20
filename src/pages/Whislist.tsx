import GridList from "@componets/common/GridList/GridList";
import Heading from "@componets/common/heading/Heading";
import { Product } from "@componets/ecommerce";
import { TProduct } from "@customType/product/Product";
import { Loading } from "@feedback/index";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();

  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="Your wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;