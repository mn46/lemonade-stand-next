import { getDrink } from "@/app/api";
import DrinkDetails from "@/app/ui/DrinkDetails";

const Drink = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const urlParams = await params;
  const drink = getDrink(urlParams.slug);

  return <DrinkDetails drinkDetails={drink} />;
};

export default Drink;
