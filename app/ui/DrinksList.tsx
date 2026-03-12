"use client";

import { use } from "react";
import { Drink } from "../types";

const DrinksList = ({ drinks }: { drinks: Promise<{ drinks: Drink[] }> }) => {
  const drinksList = use(drinks).drinks;

  console.log("drinksList", drinksList);

  return <div>DrinksList</div>;
};

export default DrinksList;
