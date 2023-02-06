import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';

import { IProduct } from '@/types/product.intarface';

import Loader from '../loader/Loader';

import Carousel from './carousel/Carousel';
import Sorting from './sorting/Sorting';
import { EnumSorting } from './sorting/sorting.interface';
import { ProductService } from '@/services/ProductService';

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);

  const { data, isLoading } = useQuery(
    ['products', sortType],
    () => ProductService.getProductsByType(sortType),
    { initialData: products }
  );

  return (
    <div className='relative'>
      <div className='text-right mt-10'>
        <Sorting sortType={sortType} setSortType={setSortType} />
      </div>
      {isLoading ? <Loader /> : <Carousel products={data} />}
    </div>
  );
};

export default Catalog;
