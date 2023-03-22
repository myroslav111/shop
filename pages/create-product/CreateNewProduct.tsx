import { FC } from 'react';

import CreateProductForm from '@/components/screens/product-details/create-product-form/CreateProductForm';
import CreateProductHookForm from '@/components/screens/product-details/create-product-hook-form/CreateProductHookForm';

const CreateNewProduct: FC = () => {
  return (
    <div>
      {/* <CreateProductForm /> */}
      <CreateProductHookForm />
    </div>
  );
};

export default CreateNewProduct;
