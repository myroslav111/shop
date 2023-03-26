import { IReview } from './reviews.interface';

export type typeProducts = 'drink' | 'dessert';

export enum EnumProductType {
  DRINK = 'drink',
  DESSERT = 'dessert'
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  reviews: IReview[];
  images: string[];
  slug: string;
  productId: number;
  typeProduct: typeProducts;
  // typeProduct: 'drink' | 'dessert';
}

export interface IProductDetails {
  product: IProduct;
}

export type ProductType = string;

export interface ICreateNewProductType {
  name: string;
  description: string;
  price: number | null;
  urls: Array<string | undefined | ArrayBuffer | null>;
  typeProduct: ProductType;
}

// export type sortType = 'newest' | 'oldest' | 'low-to-hight' | 'hight-to-low';
