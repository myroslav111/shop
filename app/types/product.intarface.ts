export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews: [];
  images: string[];
  slug: string;
  //TODO: Add review interface
}

export interface IProductDetails {
  product: IProduct;
}