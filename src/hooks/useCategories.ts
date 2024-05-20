import {
  CategoresCleanUp,
  actGetCategories,
} from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

export const useCategories = () => {
  const dispath = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
     const promis =  dispath(actGetCategories());
     return () => {
      promis.abort()
      dispath(CategoresCleanUp())
     }
  }, [dispath]);
  return { loading, error, records };
};
