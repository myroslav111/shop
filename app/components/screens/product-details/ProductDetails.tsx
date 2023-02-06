import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';

// import { products } from '@/components/data/product.data';
import Catalog from '@/components/ui/catalog/Catalog';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

import { IProduct, IProductDetails } from '@/types/product.intarface';

import Breadcrumbs from './product-breadcrumbs/Breadcrumbs';
import ProductCard from './product-card/ProductCard';
import ProductNavigation from './product-navigation/ProductNavigation';
import { ProductService } from '@/services/ProductService';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  const [idProduct, setIdProduct] = useState<string>(product._id);
  // const [products, setProducts] = useState<IProduct[]>([]);

  const { data, isLoading } = useQuery(
    ['products/relatives', idProduct],
    () => ProductService.getProductsRelatives(idProduct)
    // { initialData: products }
  );
  console.log(data);

  return (
    <>
      <Layout title={product.name} description={product.description}>
        <Heading className='text-center'>Product details</Heading>

        <div>
          <Breadcrumbs product={product} />
          <ProductNavigation productId={product._id} />
        </div>

        <ProductCard product={product} />

        {/* <Catalog products={products} /> */}
      </Layout>
    </>
  );
};

export default ProductDetails;
