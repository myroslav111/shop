import { sortType } from '@/types/product.intarface';

import { axiosClassic } from '@/api/api';

const PRODUCTS = 'products';
export const ProductService = {
  async getProducts(sortType?: sortType) {
    await axiosClassic.get(`${PRODUCTS}/`);
  }
};
