import { Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
// import axios from 'axios';
import { FC, useState } from 'react';

import Layout from '@/layout/meta/Layout';

import { ICreateNewProductType } from '@/types/product.intarface';

const CreateProductForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number | null>(null);
  const [typeProduct, setTypeProduct] = useState<string>('');

  const [urls, setUrls] = useState<
    Array<string | undefined | ArrayBuffer | null>
  >([]);

  const resetForm = () => (
    setName(''),
    setDescription(''),
    setPrice(null),
    setUrls([]),
    setTypeProduct('')
  );

  const convertBase64 = (file: any): void => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // console.log('file', file);
    fileReader.onload = () => {
      // console.log('fileReader', fileReader);
      setUrls(prev => [...prev, fileReader.result]);
    };
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files) return;

    for (let i = 0, numFiles = event.target.files.length; i < numFiles; i++) {
      const file = event.target.files[i];
      convertBase64(file);
    }
    setLoading(true);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const objDataProduct: ICreateNewProductType = {
      name,
      description,
      price,
      urls,
      typeProduct
    };
    console.log('objDataProduct', objDataProduct);
    // axios.post(
    //   'https://api-shop-express.onrender.com/api/products/',
    //   objDataProduct
    // );
    // axios.post('https://localhost:4200/api/products/', objDataProduct);
  };

  return (
    <>
      <Layout title='CreateNewProduct' description='Create New Product'>
        <FormControl isRequired={true}>
          <form
            onSubmit={submitForm}
            className='flex flex-col w-1/3 justify-center mx-auto bg-f7f7f7'
          >
            <h2 className='text-right leading-tight font-black text-green text-2xl lg:text-3xl  mb-8'>
              Create Product Form
            </h2>
            {/* <h2 className='mb-8 text-center text-xl'>CreateProductForm</h2> */}
            <Input
              onChange={e => setName(e.target.value)}
              type='text'
              variant='flushed'
              placeholder='Name'
              focusBorderColor='black'
              className='mb-8'
              autoComplete='off'
            />

            <Input
              onChange={e => setDescription(e.target.value)}
              type='text'
              variant='flushed'
              placeholder='Description'
              focusBorderColor='black'
              className='mb-8'
            />
            <Input
              onChange={e => setPrice(+e.target.value)}
              type='number'
              variant='flushed'
              placeholder='Price'
              focusBorderColor='black'
              className='mb-8'
            />
            <Input
              onChange={uploadImage}
              className='mb-8'
              type='file'
              multiple
              accept='.jpeg, .png, .jpg'
            />
            <RadioGroup defaultValue='drink' onChange={e => setTypeProduct(e)}>
              <Stack spacing={5} direction='row' className='mb-8'>
                <Radio colorScheme='green' value='dessert'>
                  Dessert
                </Radio>
                <Radio colorScheme='green' value='drink'>
                  Drink
                </Radio>
              </Stack>
            </RadioGroup>
            <button className='rounded-full bg-green text-white' type='submit'>
              send
            </button>
          </form>
        </FormControl>
      </Layout>
    </>
  );
};

export default CreateProductForm;
