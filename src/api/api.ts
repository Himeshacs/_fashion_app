import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<string[]> => {
  try {
    const { data }: AxiosResponse<string[]> = await axios.get(
      `${BASE_URL}/products`
    );
    return data;
  } catch (error) {
    const err: Error = error as Error;
    console.error("Error fetching products:", err.message);
    return [];
  }
};

export const fetchProductsByCategory = async (
  category: string
): Promise<any[]> => {
  try {
    const { data }: AxiosResponse<any> = await axios.get(
      `${BASE_URL}/products/category/${category}`
    );
    if (data && Array.isArray(data)) {
      return data.map((product: any) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      }));
    } else {
      console.error("Invalid data format:", data);
      return [];
    }
  } catch (error) {
    const err: Error = error as Error;
    console.error("Error fetching products:", err.message);
    return [];
  }
};
