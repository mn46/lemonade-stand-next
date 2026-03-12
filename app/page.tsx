import { getDrinks } from "./api";
import DrinksList from "./ui/DrinksList";

export default async function Home() {
  const drinks = getDrinks();

  return (
    <div>
      <main>
        <DrinksList drinks={drinks} />
      </main>
    </div>
  );
}
