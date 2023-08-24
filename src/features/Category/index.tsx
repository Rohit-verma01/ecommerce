import Category from "./components/CategoryItem";
import { CategorySectionContainer } from "../Home/style";
const CategorySection = () => {
  return (
    <CategorySectionContainer>
      <Category>Mobiles and Laptops</Category>
      <Category
        subCategories={["Headphones", "Speakers", "Powerbank", "Camera"]}
      >
        Electronics
      </Category>
      <Category
        subCategories={["Men's Wear", "Women's Wear", "Kid's Wear", "Watches"]}
      >
        Fashion
      </Category>
      <Category
        subCategories={["Furniture", "Kitchen and Dining", "Home Decor"]}
      >
        Home
      </Category>
      <Category>Appliances</Category>
      <Category
        subCategories={[
          "Cricket",
          "Football",
          "Cardio Equipment",
          "Fitness Accessories",
        ]}
      >
        Sports and Fitness
      </Category>
    </CategorySectionContainer>
  );
};

export default CategorySection;
