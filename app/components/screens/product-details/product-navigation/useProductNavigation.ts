import { products } from '@/components/data/product.data';

export const useProductNavigation = (productId: string) => {
  const nextProductSlug = products.find(
    product => product.id === productId + 1
  )?.slug;
  const prevProductSlug = products.find(
    product => product.id === productId - 1
  )?.slug;

  return {
    nextProductSlug,
    prevProductSlug
  };
};
