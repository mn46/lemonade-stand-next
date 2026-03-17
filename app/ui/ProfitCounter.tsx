"use client";

import { useState } from "react";

const ProfitCounter = () => {
  const [profit, setProfit] = useState<number>(0);
  return (
    <div className="grid place-content-center gap-y-10">
      <div className="grid place-items-center bg-orange rounded-lg p-10">
        <h1 className="text-2xl">Profit</h1>
        <p className="text-6xl font-semibold">{profit}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <button
          className="bg-green px-5 py-2 rounded-full"
          onClick={() => setProfit((prev) => (prev += 5))}
        >
          Sell lemonade
        </button>
        <button
          className="bg-green px-5 py-2 rounded-full"
          onClick={() =>
            setProfit((prev) => {
              if (prev - 2 < 0) return prev;
              else return (prev -= 2);
            })
          }
        >
          Buy lemons
        </button>
      </div>
    </div>
  );
};

export default ProfitCounter;
