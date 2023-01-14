import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, useState } from 'react';

import styles from './Search.module.scss';

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className={styles.search}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.500' />}
        />
        <Input
          variant='flushed'
          type='search'
          onChange={e => setSearchTerm(e.target.value)}
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
  );
};

export default Search;
