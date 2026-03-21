"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import Image from "next/image";
import {
  decrementAmount,
  incrementAmount,
  removeFromCart,
} from "../features/cart/cartSlice";

const HeaderWithCart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full bg-white z-1 flex flex-row justify-between uppercase font-semibold px-10 py-5">
        <nav className="space-x-10">
          <Link href="/">Home</Link>
          <Link href="/manage-store">Manage store</Link>
        </nav>
        <div className="relative">
          <button className="uppercase" onClick={() => setIsOpen(true)}>
            Cart
          </button>
          {cart.length > 0 && (
            <div className="absolute -bottom-2 -right-4 px-2 rounded-full bg-green grid place-items-center text-sm">
              {cart.length}
            </div>
          )}
        </div>
      </header>

      {isOpen && (
        <div className="fixed z-2 bg-shadow/70 top-0 left-0 w-screen h-screen grid place-items-center">
          <div className="bg-white rounded-lg min-w-56 min-h-56 max-w-[80vw] max-h-[90vh] p-5 overflow-y-auto flex flex-col">
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl">Cart</h2>
              <button className="text-2xl" onClick={() => setIsOpen(false)}>
                X
              </button>
            </div>

            {cart.length > 0 ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-10">
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
                        <button
                          className="bg-red rounded-full px-5"
                          onClick={() => dispatch(removeFromCart(item.idDrink))}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="bg-green px-5 py-1 text-xl rounded-full"
                >
                  checkout
                </Link>
              </div>
            ) : (
              <div className="grow grid place-items-center">
                <p className="text-center">Your cart is empty.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWithCart;
