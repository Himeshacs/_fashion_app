import { Pagination } from "@mui/material";
import { PaginatorTypes } from "../../types/types";

export const Paginator: React.FC<PaginatorTypes> = ({
  currentPage,
  productList,
  page,
  paginate,
  itemsPerPage,
}) => {
  return (
    <>
      <Pagination
        count={Math.ceil(productList?.length / itemsPerPage)}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
        color="primary"
      />
    </>
  );
};
