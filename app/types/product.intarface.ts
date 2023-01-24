import { IReview } from './reviews.interface';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews: [];
  images: string[];
  slug: string;
}

export interface IProductDetails {
  product: IProduct;
}
