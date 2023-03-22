import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { useActions } from '@/hooks/useActions';

import styles from './Search.module.scss';
import { useSearch } from './useSearch';

const Search: FC = () => {
  const { value } = useSearch();
  const [searchTerm, setSearchTerm] = useState(value);
  const { filterItems } = useActions();
  const router = useRouter();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let valueInput: string = e.currentTarget.value;
    setSearchTerm(valueInput);
    filterItems(valueInput);
  };
  const visible =
    router.pathname === '/menu-shop/MenuShop' ||
    router.pathname === '/about-us/AboutUs' ||
    router.pathname === '/create-product/CreateNewProduct';

  return (
    <>
      {!visible && (
        <div className={styles.search}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.500' />}
            />
            <Input
              variant='flushed'
              type='search'
              onChange={handleChange}
              value={searchTerm}
              placeholder='Search'
              _focus={{
                boxShadow: 'none'
              }}
              _focusVisible={{
                borderColor: '#008d64'
              }}
            />
          </InputGroup>
        </div>
      )}
    </>
  );
};

export default Search;
