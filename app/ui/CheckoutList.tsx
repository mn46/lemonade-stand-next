"use client";

import Image from "next/image";
import { useAppSelector } from "../hooks";

const CheckoutList = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="my-26 mx-10 lg:mx-32 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-items-center">
        {cart.map((item) => (
          <div key={item.idDrink} className="w-max">
            <Image
              src={item.strDrinkThumb ? item.strDrinkThumb : ""}
              alt={item.strDrink}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="py-3">
              <h2 className="text-center">
                {item.amount} x {item.strDrink}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 bg-green px-5 text-xl rounded-full self-end">
        Place order
      </button>
    </div>
  );
};

export default CheckoutList;
