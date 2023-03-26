import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { FC, useState } from 'react';

import {
  EnumProductType,
  IProductDetails
} from '../../../../types/product.intarface';

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
  const [pathBeck, setPathBeck] = useState<string>('/');

  return (
    <Breadcrumb color='#444' marginTop={8} display='flex' justifyContent='end'>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href='/'>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {product.typeProduct === EnumProductType.DESSERT && (
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href='/desert/Desert'>
            Dessert
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      {product.typeProduct === EnumProductType.DRINK && (
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href='/drink/Drink'>
            Drink
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          _hover={{
            textDecoration: 'none'
          }}
          cursor='default'
          color='#666'
        >
          {product.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
