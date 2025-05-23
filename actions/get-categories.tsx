import { Category } from "@/types";

const URL = `${process.env.GET_CATEGORIES}`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;
