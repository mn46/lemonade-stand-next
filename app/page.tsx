import Image from "next/image";
import { getDrinks } from "./api";
import DrinksList from "./ui/DrinksList";
import Lemon from "../public/lemon.png";
import Text from "../public/lemonade-stand-text.svg";

export default async function Home() {
  const drinks = getDrinks();

  return (
    <div>
      <div className="relative bg-red flex justify-center items-center h-[25vh] lg:h-[40vh]">
        <Image src={Text} alt="Lemonade stand text" className="max-w-[80vw]" />
        <Image
          src={Lemon}
          alt="Lemon icon"
          className="absolute w-[8vw] lg:w-[4vw] top-5 left-10 lg:top-5 lg:left-15"
        />
        <Image
          src={Lemon}
          alt="Lemon icon"
          className="absolute w-[8vw] lg:w-[4vw] top-2 left-42 md:left-84 lg:top-15 lg:left-50 rotate-45"
        />
        <Image
          src={Lemon}
          alt="Lemon icon"
          className="absolute w-[8vw] lg:w-[4vw] top-6 right-8 lg:bottom-4 lg:right-65 rotate-90"
        />
        <Image
          src={Lemon}
          alt="Lemon icon"
          className="absolute w-[8vw] lg:w-[4vw] bottom-5 left-17 lg:bottom-15 lg:right-45"
        />
        <Image
          src={Lemon}
          alt="Lemon icon"
          className="absolute w-[8vw] lg:w-[4vw] bottom-2 right-48 md:right-88 lg:top-15 lg:right-18 rotate-90"
        />
        <Image
          src={Lemon}
          alt="Lemon icon"
          className="absolute w-[8vw] lg:w-[4vw] bottom-4 right-10 lg:bottom-4 lg:right-38 rotate-30"
        />
      </div>
      <DrinksList drinks={drinks} />
    </div>
  );
}
