import { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/Home';

import { IProduct } from '@/types/product.intarface';

import { axiosClassic } from '@/api/api';

import { ProductService } from '@/services/ProductService';

export interface IProductsPage {
  products: IProduct[];
}

const HomePage: NextPage<IProductsPage> = ({ products }) => {
  return (
    <>
      <Home products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
  const { data } = await ProductService.getProducts();
  return {
    props: { products: data }
  };
};

export default HomePage;
