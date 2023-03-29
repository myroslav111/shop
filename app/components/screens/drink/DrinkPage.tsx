import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { FC, useState } from 'react';

import Carousel from '@/components/ui/catalog/carousel/Carousel';
import Sorting from '@/components/ui/catalog/sorting/Sorting';
import { EnumSorting } from '@/components/ui/catalog/sorting/sorting.interface';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';
import Sidebar from '@/layout/sidebar/Sidebar';

import { EnumProductType } from '@/types/product.intarface';

import { IDrinkPage } from '@/../pages/drink/Drink';
import { ProductService } from '@/services/ProductService';

const DrinkPage: FC<IDrinkPage> = ({ products }) => {
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

  const drinks = data.filter(
    drink => drink.typeProduct === EnumProductType.DRINK
  );

  return (
    <>
      <Layout title='DrinkPage' description='Drink Page'>
        {/* <div className='lg:flex lg:flex-row flex-col'>
          <Sidebar />
          <div className='place-content-center flex'>
            <Image
              src={'/images/card/Drinks.jpg'}
              alt='Picture of the author'
              width={400}
              height={400}
            />
          </div>
        </div> */}
        <Heading>Drink</Heading>
        <Sorting sortType={sortType} setSortType={setSortType} />
        <Carousel products={drinks} />
      </Layout>
    </>
  );
};

export default DrinkPage;
