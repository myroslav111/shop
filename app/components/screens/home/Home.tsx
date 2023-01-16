import { FC } from 'react';

import { products } from '@/components/data/product.data';
import Catalog from '@/components/ui/catalog/Catalog';

import Layout from '@/layout/meta/Layout';

const Home: FC = () => {
  return (
    <>
      <Layout
        title='Home'
        description='Probiere jetzt unseren neuen Caramelised Macadamia Oat Latte 🌰 und unseren Klassiker Honey Hazelnut Oat Latte 🍯'
      >
        <Catalog products={products} />
      </Layout>
    </>
  );
};

export default Home;
