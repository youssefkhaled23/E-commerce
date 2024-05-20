import { TProduct } from "@customType/product/Product";

export type orderList = {
  id: number;
  subTotal: number;
  items: TProduct[];
};
