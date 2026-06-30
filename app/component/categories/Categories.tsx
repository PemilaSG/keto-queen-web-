import Container from "../ui/Container";
import CategoryCard from "./cardscategory";
import { categories } from "../data/category";

export default function Categories() {
  return (
    <Container>

      <div className="my-16">

        <h2 className="text-4xl font-bold text-center">

          Shop by Categories

        </h2>

        <p className="text-center text-gray-500 mt-3">

          Choose your favourite keto essentials

        </p>

        <div className="grid md:grid-cols-5 gap-6 mt-10">

          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              image={item.image}
              name={item.name}
            />
          ))}

        </div>

      </div>

    </Container>
  );
}