import { FC } from 'react';

import { products } from '@/components/data/product.data';
import Catalog from '@/components/ui/catalog/Catalog';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

import { IProductDetails } from '@/types/product.intarface';

import Breadcrumbs from './product-breadcrumbs/Breadcrumbs';
import ProductCard from './product-card/ProductCard';
import ProductNavigation from './product-navigation/ProductNavigation';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <>
      <Layout title={product.name} description={product.description}>
        <Heading className='text-center'>Product details</Heading>

        <div>
          <Breadcrumbs product={product} />
          <ProductNavigation productId={product.id} />
        </div>

        <ProductCard product={product} />

        <Catalog products={products} />
      </Layout>
    </>
  );
};

export default ProductDetails;
