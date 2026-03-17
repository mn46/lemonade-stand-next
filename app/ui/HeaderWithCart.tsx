"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../types";
import Image from "next/image";
import { decrementAmount, incrementAmount } from "../features/cart/cartSlice";

const HeaderWithCart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <header className="flex flex-row justify-between uppercase font-semibold px-10 py-5">
        <nav className="space-x-10">
          <Link href="/">Home</Link>
          <Link href="/manageStore">Manage store</Link>
        </nav>
        <button className="uppercase" onClick={() => setIsOpen(true)}>
          Cart
        </button>
      </header>

      {isOpen && (
        <div className="fixed z-1 bg-shadow/70 top-0 left-0 w-screen h-screen grid place-items-center">
          <div className="bg-white rounded-lg max-w-[80vw] max-h-[90vh] p-5 overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="text-2xl">Cart</h2>
              <button className="text-2xl" onClick={() => setIsOpen(false)}>
                X
              </button>
            </div>

            {cart.length > 0 ? (
              <div>
                <div className="grid grid-cols-3 justify-items-center gap-8 mt-10">
                  {cart.map((item) => (
                    <div key={item.idDrink}>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={item.strDrinkThumb ? item.strDrinkThumb : ""}
                          alt={item.strDrink}
                          width={250}
                          height={500}
                        />
                        <div className="bg-orange py-3">
                          <h2 className="text-center">{item.strDrink}</h2>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between mt-3">
                        <div className="space-x-3">
                          <button
                            className="bg-green px-3 rounded-full"
                            onClick={() =>
                              dispatch(decrementAmount(item.idDrink))
                            }
                          >
                            -
                          </button>
                          <span>{item.amount}</span>
                          <button
                            className="bg-green px-3 rounded-full"
                            onClick={() =>
                              dispatch(incrementAmount(item.idDrink))
                            }
                          >
                            +
                          </button>
                        </div>
                        <button className="bg-red rounded-full px-5">
                          remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="bg-green px-5 py-1 text-xl rounded-full mt-10">
                  checkout
                </button>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWithCart;
