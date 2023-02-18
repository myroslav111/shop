import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useSearch = () => useTypedSelector(state => state.filterSearch);
