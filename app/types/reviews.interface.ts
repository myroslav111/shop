import { IProduct } from './product.intarface';

export interface IReview {
  id: number;
  //user
  product: IProduct;
  text: string;
  rating: number;
}
