import axios from 'axios';
import { FC, useState } from 'react';

// _id: string;
//   name: string;
//   description: string;
//   price: number;
//   reviews: IReview[];
//   images: string[];
//   slug: string;
//   productId: number;

const CreateProductForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number | null>(null);

  const [urls, setUrls] = useState<
    Array<string | undefined | ArrayBuffer | null>
  >([]);

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
    const objDataProduct = {
      name,
      description,
      price,
      urls
    };
    console.log('objDataProduct', objDataProduct);
    try {
      const fetch = await axios.post(
        'http://localhost:4200/api/products/',
        objDataProduct
      );
      const data = fetch.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // http://localhost:4200/api/products/

  return (
    <form
      onSubmit={submitForm}
      className='flex flex-col w-1/3 justify-center mx-auto'
    >
      CreateProductForm
      <input
        onChange={e => setName(e.target.value)}
        className='border-solid'
        type='text'
      />
      <input
        onChange={e => setDescription(e.target.value)}
        className='border-solid'
        type='text'
      />
      <input
        onChange={e => setPrice(+e.target.value)}
        className='border-solid'
        type='number'
      />
      <input onChange={uploadImage} className='' type='file' multiple />
      <button className='rounded-full bg-purple' type='submit'>
        send
      </button>
    </form>
  );
};

export default CreateProductForm;
