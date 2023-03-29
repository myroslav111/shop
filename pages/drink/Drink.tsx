import { GetStaticProps, NextPage } from 'next';
import { FC } from 'react';

import DrinkPage from '@/components/screens/drink/DrinkPage';

import { EnumProductType, IProduct } from '@/types/product.intarface';

import { ProductService } from '@/services/ProductService';

export interface IDrinkPage {
  products: IProduct[];
}

const Drink: NextPage<IDrinkPage> = ({ products }) => {
  return (
    <>
      <DrinkPage products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IDrinkPage> = async () => {
  const productsAll = await ProductService.getProductsByType();
  const products = productsAll.filter(
    productItem => productItem.typeProduct === EnumProductType.DRINK
  );

  return {
    props: { products }
  };
};

export default Drink;
