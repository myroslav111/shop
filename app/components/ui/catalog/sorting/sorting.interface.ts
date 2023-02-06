export type sortType = 'newest' | 'oldest' | 'low-to-hight' | 'hight-to-low';

export enum EnumSorting {
  LOW_TO_HIGH_PRICE = 'low-to-hight',
  HIGH_TO_LOW_PRICE = 'hight-to-low',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}

export interface ISortingItem {
  label: 'Price: hight to low' | 'Price: low to hight' | 'Newest' | 'Oldest';
  value: EnumSorting;
}
