import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import {axiosInstance} from "../config";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: black;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosInstance.get(
          cat
            ? `products?category=${cat}`
            : "products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);


  return (
    <Container>
          <h1 style={{color: "white"}}>Top products</h1>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0,3)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
