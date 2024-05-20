import GridList from "@componets/common/GridList/GridList";
import Heading from "@componets/common/heading/Heading";
import { Product } from "@componets/ecommerce";
import { TProduct } from "@customType/product/Product";
import { Loading } from "@feedback/index";
import { useProduct } from "@hooks/useProduct";

const Products = () => {
  const { loading, error, productInfo, prefix } = useProduct();

  return (
    <>
      <Heading title={`${prefix?.toUpperCase()} Products`} />
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;