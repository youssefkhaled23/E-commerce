import { TLoading } from "@customType/share";
import React from "react";
import CategoreSkeleton from "@feedback/Skeleton/CategoreSkeleton/CategoreSkeleton";
import CartSkeleton from "@feedback/Skeleton/CartSkeleton/CartSkeleton";
import ProductSkeleton from "@feedback/Skeleton/ProductSkeleton/ProductSkeleton";
import { LottiHandler } from "@feedback/LottiHandler/LottiHandler";
import TableSkeleton from "@feedback/Skeleton/TableSkeleton/TableSkeleton";

const SkeletonTypes = {
  categore : CategoreSkeleton,
  cart : CartSkeleton,
  product : ProductSkeleton,
  table : TableSkeleton
}

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
  type : keyof typeof SkeletonTypes
};

const Loading = ( {status , error , children , type = "categore"} : LoadingProps ) => {
  const Component = SkeletonTypes[type]
  if (status === "pending") {
    return <Component/>
  }
  if (status === "failed") {
    return <p><LottiHandler type="Error" message={error as string} /></p>
  }
  return <>
  {children}
  </>;
};

export default Loading;
