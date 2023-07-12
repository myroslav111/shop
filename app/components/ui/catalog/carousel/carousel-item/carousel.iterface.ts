import { IProduct } from '@/types/product.intarface';

export interface ICarouselItem {
  product: IProduct;
  index: number;
  products?: IProduct[];
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'index'> {
  isActive: boolean;
  onSelectSlide: () => void;
}
