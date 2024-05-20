import GridList from "@componets/common/GridList/GridList";
import Heading from "@componets/common/heading/Heading";
import { Category } from "@componets/ecommerce";
import { Loading } from "@feedback/index";
import { useCategories } from "@hooks/useCategories";
import { TCategories } from "@customType/categories/Categories";

const Categories = () => {
  const { loading, error, records } = useCategories();

  return (
    <>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="categore">
        <GridList<TCategories>
          emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;