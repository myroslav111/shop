import { FC, useState } from 'react';

import Carousel from './carousel/Carousel';
import Sorting from './sorting/Sorting';
import { EnumSorting } from './sorting/sorting.interface';
import { IProduct } from '@/types/product.intarface';

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);

  return (
    <div>
      <div className='text-right mt-10'>
        <Sorting sortType={sortType} setSortType={setSortType}/>
      </div>
      <Carousel products={products}  />
    </div>
  );
};

export default Catalog;
