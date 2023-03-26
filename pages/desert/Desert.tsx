import { GetStaticProps, NextPage } from 'next';
import { FC } from 'react';

import DesertPage from '@/components/screens/desert/DesertPage';

import { IProduct } from '@/types/product.intarface';

import { ProductService } from '@/services/ProductService';

export interface IDessertPage {
  products: IProduct[];
}

const Desert: NextPage<IDessertPage> = ({ products }) => {
  return (
    <>
      <DesertPage products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IDessertPage> = async () => {
  const productsAll = await ProductService.getProductsByType();
  const products = productsAll.filter(
    productItem => productItem.typeProduct === 'dessert'
  );

  return {
    props: { products }
  };
};

export default Desert;
