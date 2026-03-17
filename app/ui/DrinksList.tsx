"use client";

import { use } from "react";
import { Drink } from "../types";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks";

const DrinksList = ({ drinks }: { drinks: Promise<{ drinks: Drink[] }> }) => {
  const drinksList = use(drinks).drinks;

  const dispatch = useAppDispatch();

  return (
    <div className="my-16 mx-10 lg:mx-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 justify-items-center">
      {drinksList.map((drink) => (
        <div key={drink.idDrink} className="w-max">
          <div className="shadow shadow-shadow rounded-lg overflow-hidden">
            <Image
              src={drink.strDrinkThumb ? drink.strDrinkThumb : ""}
              alt={drink.strDrink}
              width={250}
              height={500}
            />
            <div className="bg-orange py-3">
              <h2 className="text-center">{drink.strDrink}</h2>
            </div>
          </div>
          <div className="flex justify-between pt-5">
            <Link href={`/drinks/${drink.idDrink}`}>Read more</Link>
            <button
              className="bg-green rounded-full px-5"
              onClick={() => dispatch(addToCart(drink))}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrinksList;
