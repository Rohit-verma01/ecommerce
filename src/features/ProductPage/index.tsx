import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Add from "../../components/Buttons/AddToCart";
import Buy from "../../components/Buttons/BuyNow";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import {
  ProductContainer,
  ProductImage,
  DetailContainer,
  ButtonWrapper,
  LoaderContainer,
} from "./style";
import * as constant from "../../constants";
import Loader from "../../components/Loader";
import { RootState } from "../../app/store";

interface ProductType {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
}
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductType>({
    title: "",
    price: 0,
    url: "",
    id: 0,
    description: "",
  });
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const cartId: number[] = cart.map((item) => item.id);

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate("/NotFound");
    } else {
      setIsLoading(true);
      const fetchDetail = async () => {
        const product = await getDocs(
          query(
            collection(db, constant.PRODUCTS),
            where("product_id", "==", Number(id))
          )
        );
        const data = product.docs[0].data();
        setProduct({
          title: data.title,
          price: data.price,
          url: data.url,
          id: data.product_id,
          description: data.description,
        });
        setIsLoading(false);
      };
      fetchDetail();
    }
  }, [id, navigate]);
  return (
    <div>
      {isLoading ? (
        <LoaderContainer data-testid="loader">
          <Loader />
        </LoaderContainer>
      ) : (
        !isNaN(Number(id)) && (
          <ProductContainer data-testid="product-container">
            <ProductImage src={product?.url}></ProductImage>
            <DetailContainer>
              <h1>{product?.description}</h1>
              <h3>Rs.{product?.price}</h3>
              <hr />
              <ButtonWrapper>
                <Add data={product} disable={cartId.includes(product.id)}>
                  Add to Cart
                </Add>
                <Buy data={product}>Buy Now</Buy>
              </ButtonWrapper>
            </DetailContainer>
          </ProductContainer>
        )
      )}
    </div>
  );
};

export default SingleProductPage;
