import { FC } from 'react';

// import { products } from '@/components/data/product.data';
import Catalog from '@/components/ui/catalog/Catalog';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

import { IProductsPage } from '@/../pages';

const Home: FC<IProductsPage> = ({ products }) => {
  /* SSR need */
  return (
    <>
      <Layout
        title='Home'
        description='Probiere jetzt unseren neuen Caramelised Macadamia Oat Latte 🌰 und unseren Klassiker Honey Hazelnut Oat Latte 🍯'
      >
        <Heading className='text-right'>The happiest hour of the year </Heading>
        <Catalog products={products} />
      </Layout>
    </>
  );
};

export default Home;
