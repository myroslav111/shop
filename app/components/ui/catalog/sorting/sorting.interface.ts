export enum EnumSorting {
  LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
  HIGH_TO_LOW_PRICE = 'HIGH_TO_LOW_PRICE',
  NEWEST = 'NEWEST',
  OLDEST = 'OLDEST'
}

export interface ISortingItem {
  label: 'Price: hight to low' | 'Price: low to hight' | 'Newest' | 'Oldest';
  value: EnumSorting;
}
