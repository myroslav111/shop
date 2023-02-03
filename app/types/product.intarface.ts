import { IReview } from './reviews.interface';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews: IReview[];
  images: string[];
  slug: string;
}

export interface IProductDetails {
  product: IProduct;
}

export type sortType = 'newest' | 'oldest' | 'low-to-hight' | 'hight-to-low';
