import { doc, getDoc } from "firebase/firestore";
import { ReactNode, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { db } from "../../../../firebase";
import * as constant from "../../../../constants";
import { CategoryItem, SubCategoryContainer, Item } from "../../style";

const Category = (props: { subCategories?: string[]; children: ReactNode }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);

  const array: string[] = [];
  const handleClick = async (e: any) => {
    const category = e.target.innerText.split("\n")[0];
    const document = await getDoc(doc(db, constant.CATEGORIES, category));
    const id = Object(document.data()).category_id;
    navigate({
      pathname: "/",
      search: `?${createSearchParams({ category: id })}`,
    });
  };

  const handleHover = () => {
    props.subCategories?.forEach((item: string) => {
      array.push(item);
    });
    setCategories([...array]);
  };

  return (
    <CategoryItem
      data-testid="category-dropdown"
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={() => setCategories([])}
    >
      {props.children}
      {categories.length !== 0 && (
        <SubCategoryContainer>
          {categories.map((item, index) => {
            return <Item key={index}>{item}</Item>;
          })}
        </SubCategoryContainer>
      )}
    </CategoryItem>
  );
};

export default Category;
