import { IProduct } from '@/types/product.intarface';

export const useProductNavigation = (
  productId: number,
  products: IProduct[]
) => {
  const nextProductSlug = products.find(
    product => product.productId === productId + 1
  )?.slug;
  const prevProductSlug = products.find(
    product => product.productId === productId - 1
  )?.slug;

  return {
    nextProductSlug,
    prevProductSlug
  };
};
