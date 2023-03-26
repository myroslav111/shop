import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';

import Carousel from '@/components/ui/catalog/carousel/Carousel';
import Sorting from '@/components/ui/catalog/sorting/Sorting';
import { EnumSorting } from '@/components/ui/catalog/sorting/sorting.interface';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

import { EnumProductType } from '@/types/product.intarface';

import { IDessertPage } from '@/../pages/desert/Desert';
import { ProductService } from '@/services/ProductService';

const DesertPage: FC<IDessertPage> = ({ products }) => {
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);

  const { data, isLoading } = useQuery(
    ['products', sortType],
    () => {
      // if (productId) {
      //   return ProductService.getProductsRelatives(productId);
      // }

      return ProductService.getProductsByType(sortType);
    },
    { initialData: products }
  );

  const desserts = data.filter(
    dessert => dessert.typeProduct === EnumProductType.DESSERT
  );

  return (
    <>
      <Layout title='DesertkPage' description='Desert Page'>
        <Heading>Dessert</Heading>
        <Sorting sortType={sortType} setSortType={setSortType} />
        <Carousel products={desserts} />
      </Layout>
    </>
  );
};

export default DesertPage;
