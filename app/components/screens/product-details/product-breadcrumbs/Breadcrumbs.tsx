import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

import { IProductDetails } from '@/../pages/product/[slug]';

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
  return (
    <Breadcrumb color='#444' marginTop={8} display='flex' justifyContent='end'>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href='/'>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

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
