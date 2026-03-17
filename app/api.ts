import { Drink } from "./types";

export const getDrinks = async (): Promise<{ drinks: Drink[] }> => {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon",
  );

  const data = await res.json();

  return data;
};

export const getDrink = async (id: string): Promise<{ drinks: Drink[] }> => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  const data = await res.json();

  return data;
};
