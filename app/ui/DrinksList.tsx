"use client";

import { use } from "react";
import { Drink } from "../types";

const DrinksList = ({ drinks }: { drinks: Promise<{ drinks: Drink[] }> }) => {
  const drinksList = use(drinks).drinks;

  return <div>DrinksList</div>;
};

export default DrinksList;
