import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// import { products } from '@/components/data/product.data';
import ProductDetails from '@/components/screens/product-details/ProductDetails';

import { IProduct, IProductDetails } from '@/types/product.intarface';

import { ProductService } from '@/services/ProductService';

const ProductDetailsPage: NextPage<IProductDetails> = ({ product }) => {
  return <ProductDetails product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await ProductService.getProductsByType();
  const paths = products.map(product => {
    return {
      params: { slug: product.slug }
    };
  });
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
  params
}) => {
  const products = await ProductService.getProductsByType();
  const product =
    products.find(product => product.slug === params?.slug) || ({} as IProduct);

  return {
    props: { product }
  };
};

export default ProductDetailsPage;
