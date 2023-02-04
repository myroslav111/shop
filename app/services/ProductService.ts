import { IProduct, sortType } from '@/types/product.intarface';

import { axiosClassic } from '@/api/api';

const PRODUCTS = '/products';
const PRODUCTS_TYPE = '/products/type';
const PRODUCTS_SLUG = '/products/slug';
export const ProductService = {
  async getProducts() {
    return await axiosClassic.get<IProduct[]>(`${PRODUCTS}`);
  },

  async getProductsByType(type?: sortType) {
    // return await axiosClassic.get(`${PRODUCTS_TYPE}/${type}`);
    return await axiosClassic.get<IProduct[]>(`${PRODUCTS_TYPE}`, {
      params: { type }
    });
  },

  async getProductById(id: string) {
    return await axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`);
  },

  async getProductBySlug(slug: string) {
    return await axiosClassic.get<IProduct>(`${PRODUCTS_SLUG}/${slug}`);
  }

  // async getProducts(type?: sortType) {
  //   return await axiosClassic.get(`${PRODUCTS}`);
  // }
};
