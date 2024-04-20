import { ClothingCard } from "../../components/clothingCard/ClothingCard";
import style from "./home.module.scss";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/api";
import { CategoryCard } from "../../components/categoryCard/CategoryCard";
import { useGlobalState } from "../../store/provider";
import { ActionTypes } from "../../store/actions";
import { Paginator } from "../../components/pagination/paginator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomCircularProgress from "../../components/spinner/CustomCircularProgress";

export const Home = () => {
  const { state, dispatch } = useGlobalState();
  const { productList, loading } = state;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const men = "men's clothing";
  const women = "women's clothing";

  const getProducts = async () => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    const result = await fetchProducts();
    dispatch({ type: ActionTypes.SET_PRODUCT_LIST, payload: result });
    dispatch({ type: ActionTypes.SET_LOADING, payload: false });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Grid container>
        <Grid container spacing={6} px={4} py={2}>
          <Grid item xs={12}>
            <Typography className={style.homeTitleStyle}>Flash Sale</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <CustomCircularProgress loading={loading} />
            </Grid>
          </Grid>
          {currentItems &&
            currentItems.map(
              (product, index) =>
                (product.category === men || product.category === women) && (
                  <Grid item key={index} xs={12} md={6} lg={3}>
                    <ClothingCard
                      image={product.image}
                      title={product.title}
                      priceSymbol="Rs"
                      price={product.price}
                      description={product.description}
                      category={product.category}
                    />
                  </Grid>
                )
            )}
        </Grid>

        <Grid container justifyContent="center" mt={4}>
          <Paginator
            currentPage={currentPage}
            productList={productList || []}
            page={currentPage}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        </Grid>

        <Grid container spacing={6} px={4} py={4}>
          <Grid item xs={12}>
            <Typography className={style.homeTitleStyle}>Categories</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CategoryCard title={men} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CategoryCard title={women} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
