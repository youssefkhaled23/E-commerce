export type TProduct = {
  id: number;
  title: string;
  img: string;
  cat_prefix: string;
  price: number;
  quantity?: number;
  max: number;
  isLiked: boolean;
  isAuthenticated?: boolean;
};
