export interface ClothingCardTypes {
  image: string;
  title: string;
  priceSymbol: string;
  price: number;
  description: string;
  category: string;
}

export interface CategoryCardTypes {
  title: string;
}

export interface PaginatorTypes {
  currentPage: number;
  productList: any[];
  page: number;
  paginate: (pageNumber: number) => void;
  itemsPerPage: number;
}
export interface HeaderType  {
  appName: string;
};
export interface CustomCircularProgressProps {
  loading: boolean;
}
