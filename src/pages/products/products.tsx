import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../api/api";
import { ClothingCard } from "../../components/clothingCard/ClothingCard";
import { useGlobalState } from "../../store/provider";
import { ActionTypes } from "../../store/actions";
import style from "./products.module.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomCircularProgress from "../../components/spinner/CustomCircularProgress";

export const Products = () => {
  const { state, dispatch } = useGlobalState();
  const { selectedProducts, loading } = state;
  const { category } = useParams<{ category: string }>();

  const getProductsByCategory = async (category: string) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    const result = await fetchProductsByCategory(category);
    dispatch({ type: ActionTypes.SET_SELECTED_PRODUCTS, payload: result });
    dispatch({ type: ActionTypes.SET_LOADING, payload: false });
  };
  useEffect(() => {
    if (category) {
      const fetchData = async () => {
        const products = await getProductsByCategory(category);
      };

      fetchData();
    }
  }, [category]);

  return (
    <Grid container spacing={6} px={4} py={2}>
      <Grid item xs={12}>
        <Typography className={style.categoryTitleStyle}>{category}</Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <CustomCircularProgress loading={loading} />
        </Grid>
      </Grid>
      {!loading && selectedProducts && selectedProducts.length > 0 && (
        selectedProducts.map((product, index) => (
          <Grid item key={index} xs={12} md={6} lg={3} py={4}>
            {category && (
              <ClothingCard
                image={product.image}
                title={product.title}
                priceSymbol="Rs"
                price={product.price}
                description={product.description}
                category={category}
              />
            )}
          </Grid>
        ))
      )}
    </Grid>
  );
};
