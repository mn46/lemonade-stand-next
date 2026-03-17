"use client";

import { use, useState } from "react";
import { Drink } from "../types";
import Image from "next/image";
import { useAppDispatch } from "../hooks";
import { addToCartWithAmount } from "../features/cart/cartSlice";

const DrinkDetails = ({
  drinkDetails,
}: {
  drinkDetails: Promise<{ drinks: Drink[] }>;
}) => {
  const [amount, setAmount] = useState<number>(1);

  const dispatch = useAppDispatch();

  const drink = use(drinkDetails).drinks[0];

  const ingredients: string[] = Object.entries(drink).map(([key, value]) => {
    if (key.includes("Ingredient") && value) return value;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 justify-items-center mx-5 md:mx-10 lg:mx-20 xl:mx-45 my-10">
      <Image
        src={drink.strDrinkThumb ?? ""}
        alt={drink.strDrink}
        width={500}
        height={500}
        className="rounded-lg mb-10 md:mb-0"
      />

      <div className="space-y-5">
        <h1 className="uppercase text-4xl">{drink.strDrink}</h1>

        <p>This drink is {drink.strAlcoholic.toLowerCase()}.</p>

        <div className="bg-orange p-3 rounded-lg">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <div className="space-x-6">
            {ingredients.map((ingredient) =>
              ingredient ? <span key={ingredient}>{ingredient}</span> : null,
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Preparation</h2>
          <p>{drink.strInstructions}</p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="space-x-3">
            <button
              className="bg-green px-3 rounded-full"
              onClick={() =>
                setAmount((prev) => {
                  if (prev !== 1) return (prev -= 1);
                  else return prev;
                })
              }
            >
              -
            </button>
            <span>{amount}</span>
            <button
              className="bg-green px-3 rounded-full"
              onClick={() => setAmount((prev) => (prev += 1))}
            >
              +
            </button>
          </div>
          <button
            className="bg-green rounded-full px-5"
            onClick={() =>
              dispatch(addToCartWithAmount({ amount: amount, ...drink }))
            }
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetails;
