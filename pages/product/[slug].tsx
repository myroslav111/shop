import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import ProductDetails from '@/components/screens/product-details/ProductDetails';
import Loader from '@/components/ui/loader/Loader';

import { IProduct, IProductDetails } from '@/types/product.intarface';

import { ProductService } from '@/services/ProductService';

export interface IProductDetailsPage {
  product: IProduct;
  products: IProduct[];
}

const ProductDetailsPage: NextPage<IProductDetailsPage> = props => {
  return <ProductDetails product={props.product} products={props.products} />;
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
    props: { product, products }
  };
};

export default ProductDetailsPage;
