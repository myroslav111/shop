import { FC } from 'react';

import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

import Breadcrumbs from './product-breadcrumbs/Breadcrumbs';
import ProductNavigation from './product-navigation/ProductNavigation';
import { IProductDetails } from '@/../pages/product/[slug]';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <>
      <Layout title={product.name} description={product.description}>
        <Heading className='text-center'>{product.name}</Heading>
        <div>
          <Breadcrumbs product={product} />
          <ProductNavigation productId={product.id} />
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
