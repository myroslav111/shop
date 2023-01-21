import { EnumSorting, ISortingItem } from './sorting.interface';

export const sortingData: ISortingItem[] = [
  {
    label: 'Newest',
    value: EnumSorting.NEWEST
  },
  {
    label: 'Oldest',
    value: EnumSorting.OLDEST
  },
  {
    label: 'Price: low to hight',
    value: EnumSorting.LOW_TO_HIGH_PRICE
  },
  {
    label: 'Price: hight to low',
    value: EnumSorting.HIGH_TO_LOW_PRICE
  }
];
