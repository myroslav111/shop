import { FC, useState } from 'react';

import Catalog from '@/components/ui/catalog/Catalog';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

import Breadcrumbs from './product-breadcrumbs/Breadcrumbs';
import ProductCard from './product-card/ProductCard';
import ProductNavigation from './product-navigation/ProductNavigation';
import { IProductDetailsPage } from '@/../pages/product/[slug]';

const ProductDetails: FC<IProductDetailsPage> = ({ product, products }) => {
  return (
    <>
      <Layout title={product.name} description={product.description}>
        <Heading className='text-center'>Product details</Heading>

        <div>
          <Breadcrumbs product={product} />
          <ProductNavigation
            productId={product.productId}
            products={products}
          />
        </div>

        <ProductCard product={product} />

        <Catalog products={products} productId={product._id} />
      </Layout>
    </>
  );
};

export default ProductDetails;
