import { EnumSorting } from '@/components/ui/catalog/sorting/sorting.interface';

import { ICreateNewProductType, IProduct } from '@/types/product.intarface';

import { axiosClassic } from '@/api/api';

const PRODUCTS = '/products';
const PRODUCTS_RELATIVES = '/products/relatives';
const PRODUCTS_SLUG = '/products/slug';
export const ProductService = {
  async createProduct(dataProduct: ICreateNewProductType) {
    try {
      const { data } = await axiosClassic.post(`${PRODUCTS}/`, dataProduct);
      console.log('🚀 ~ data:', data);
    } catch (error) {
      console.log(error);
    }
  },

  async getProducts() {
    return await axiosClassic.get<IProduct[]>(`${PRODUCTS}`);
  },

  async getProductsByType(type?: EnumSorting) {
    const { data } = await axiosClassic.get<IProduct[]>(`${PRODUCTS}`, {
      params: { type }
    });
    return data;
  },

  async getProductById(id: string) {
    return await axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`);
  },

  async getProductsRelatives(id: string) {
    const { data } = await axiosClassic.get<IProduct[]>(
      `${PRODUCTS_RELATIVES}/${id}`
    );
    return data;
  },

  async getProductBySlug(slug: string) {
    return await axiosClassic.get<IProduct>(`${PRODUCTS_SLUG}/${slug}`);
  }

  // async getProducts(type?: sortType) {
  //   return await axiosClassic.get(`${PRODUCTS}`);
  // }
};
