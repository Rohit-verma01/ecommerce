import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase";
import { useNavigate, useSearchParams } from "react-router-dom";
import Buy from "../../components/Buttons/BuyNow";
import WishlistButton from "../../components/Buttons/WishlistButton";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Add from "../../components/Buttons/AddToCart";
import {
  FilterContainer,
  Filter,
  CardWrapper,
  Card,
  CardImage,
  ButtonContainer,
} from "./style";
import CategorySection from "../Category";
import * as constant from "../../constants";
import Quantity from "../Cart/components/Qauntity";
import { CartItemType } from "../Cart/slice";
import NoProductFound from "../NoProductFound";
import React from "react";
import { productActions } from "./slice";
export interface ProductType {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  quantity?: number;
}

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = React.useState<number>(0);
  const [isLoading, setIsloading] = React.useState<boolean>(true);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const wishlist = useSelector(
    (state: RootState) => state.wishlistReducer.wishlist
  );
  const userId = localStorage.getItem(constant.ID)
    ? JSON.parse(localStorage.getItem(constant.ID)!)
    : "";
  const wishlistId = wishlist.map((item: ProductType) => item.id);
  const cartId: number[] = cart.map((item) => item.id);
  const [searchParam] = useSearchParams();
  const categoryId = Number(searchParam.get("category"));
  const searchValue = searchParam.get("search")?.toLowerCase();
  const [allProducts, setAllProducts] = React.useState<ProductType[]>([]);
  const productDetails = (id: number) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      let products = await getDocs(collection(db, constant.PRODUCTS));
      if (categoryId !== 0) {
        products = await getDocs(
          query(
            collection(db, constant.PRODUCTS),
            where("category_id", "==", categoryId)
          )
        );
        if (products.docs.length === 0) {
          products = await getDocs(
            query(
              collection(db, constant.CATEGORIES),
              where("parent_id", "==", categoryId)
            )
          );
          const allCategoryId: number[] = [];
          products.forEach((item) =>
            allCategoryId.push(Object(item).data().category_id)
          );
          products = await getDocs(
            query(
              collection(db, constant.PRODUCTS),
              where("category_id", "in", [...allCategoryId])
            )
          );
        }
      }
      allProducts.splice(0, allProducts.length);

      products.forEach((doc) => {
        const item = {
          title: doc.data().title,
          price: doc.data().price,
          url: doc.data().url,
          id: doc.data().product_id,
          description: doc.data().description,
          quantity: 1,
        };
        allProducts.push(item);
      });
      console.log("Products = ", allProducts);
      setMaxPrice(
        allProducts.reduce((acc, curr) => {
          return acc < curr.price ? curr.price : acc;
        }, 0)
      );
      if (searchValue || filterValue) {
        let filterProducts: ProductType[] = allProducts;
        if (searchValue) {
          filterProducts = allProducts.filter((product) => {
            const description = product.description.toLowerCase();
            const title = product.title.toLowerCase();
            if (
              description.includes(searchValue.toLowerCase()) ||
              title.includes(searchValue.toLowerCase())
            )
              return true;
            return false;
          });
          setAllProducts([...filterProducts]);
          setMaxPrice(
            filterProducts.reduce((acc, curr) => {
              return acc < curr.price ? curr.price : acc;
            }, 0)
          );
        }
        if (filterValue !== 0) {
          filterProducts = filterProducts.filter(
            (product) => product.price < filterValue
          );
          setAllProducts([...filterProducts]);
        }
      }
      setIsloading(false);
    };
    console.log("filter value", filterValue);
    fetchData();
  }, [categoryId, searchValue, filterValue, userId]);

  const handleFilter = (e: any) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <CategorySection />
      <FilterContainer>
        <Filter
          data-testid="filter"
          type="range"
          min="0"
          max={maxPrice + 1}
          step="1"
          value={filterValue !== 0 ? filterValue : maxPrice}
          onChange={handleFilter}
        />
        Rs.{filterValue !== 0 ? filterValue : maxPrice}
      </FilterContainer>
      <CardWrapper data-testid="product-container">
        {isLoading ? (
          <Loader data-testid="loader" />
        ) : allProducts.length === 0 ? (
          <NoProductFound data-testid="not-found" />
        ) : (
          <>
            {allProducts.map((data, index) => {
              return (
                <Card
                  data-testid="card"
                  key={index}
                  onClick={() => productDetails(data.id)}
                >
                  <WishlistButton
                    data-testid="wishlist-btn"
                    data={data}
                    add={wishlistId.includes(data.id)}
                  />
                  <CardImage src={data.url} alt="phone" />
                  <h3>{data.title}</h3>
                  <h4>Rs.{data.price}</h4>
                  <ButtonContainer>
                    {cartId.includes(data.id) ? (
                      <Quantity data={data as CartItemType} />
                    ) : (
                      <Add data={data} disable={cartId.includes(data.id)}>
                        Add To Cart
                      </Add>
                    )}

                    <Buy data={data}>Buy Now</Buy>
                  </ButtonContainer>
                </Card>
              );
            })}
          </>
        )}
      </CardWrapper>
    </>
  );
};

export default Products;
