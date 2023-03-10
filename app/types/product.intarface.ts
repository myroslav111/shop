import { IReview } from './reviews.interface';

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  reviews: IReview[];
  images: string[];
  slug: string;
  productId: number;
}

export interface IProductDetails {
  product: IProduct;
}

// export type sortType = 'newest' | 'oldest' | 'low-to-hight' | 'hight-to-low';
