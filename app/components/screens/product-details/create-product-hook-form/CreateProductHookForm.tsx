import axios from 'axios';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Layout from '@/layout/meta/Layout';

import { ICreateNewProductType } from '@/types/product.intarface';

import styles from './CreateProductHookForm.module.scss';

const CreateProductHookForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [urls, setUrls] = useState<
    Array<string | undefined | ArrayBuffer | null>
  >([]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ICreateNewProductType>({ mode: 'onChange' });

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

  const onSubmit: SubmitHandler<ICreateNewProductType> = objDataProduct => {
    objDataProduct.price = Number(objDataProduct.price);
    objDataProduct.urls = urls;
    console.log(objDataProduct);
    console.log(urls);
    axios.post(
      'https://api-shop-express.onrender.com/api/products/',
      objDataProduct
    );
    // axios.post('https://localhost:4200/api/products/', objDataProduct);
  };

  return (
    <>
      <Layout title='CreateNewProduct' description='Create New Product'>
        <div className={styles.wrapperProductForm}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formProductForm}
          >
            <label className={styles.labelProductForm}>
              <p className={styles.paragraphProductForm}>Name</p>
              <input
                className={styles.inputProductForm}
                {...register('name', { required: true, maxLength: 20 })}
                type='text'
                name='name'
                placeholder='Write product name ...'
                autoComplete='off'
              />
            </label>
            {errors.name && (
              <p className={styles.errorTextProductForm}>
                This Name is required
              </p>
            )}

            <label className={styles.labelProductForm}>
              <p className={styles.paragraphProductForm}>Description</p>
              <textarea
                className={styles.descriptionProductForm}
                placeholder='Write description ...'
                {...register('description', { required: true, maxLength: 200 })}
              ></textarea>
            </label>
            {errors.description && (
              <p className={styles.errorTextProductForm}>
                This Description is required
              </p>
            )}

            <label className={styles.labelProductForm}>
              <p className={styles.paragraphProductForm}>Price</p>
              <input
                className={styles.inputProductForm}
                {...register('price', { required: true })}
                type='number'
                name='price'
                placeholder='123'
                autoComplete='off'
              />
            </label>
            {errors.price && (
              <p className={styles.errorTextProductForm}>
                This Price is required
              </p>
            )}

            <label className={styles.labelProductForm}>
              <p className={styles.paragraphProductForm}>File</p>
              <input
                className={styles.fileInput}
                {...register('urls', { required: true })}
                onChange={uploadImage}
                type='file'
                name='urls'
                accept='.jpeg, .png, .jpg, .webp, .svg'
                multiple
              />
            </label>
            {errors.name && (
              <p className={styles.errorTextProductForm}>
                This File is required
              </p>
            )}

            <label className={styles.labelProductForm}>
              <p className={styles.paragraphProductForm}>Dessert</p>
              <input
                {...register('typeProduct', { required: true })}
                id='dessert'
                value='dessert'
                name='typeProduct'
                type='radio'
              />
            </label>
            <label className={styles.labelProductForm}>
              <p className={styles.paragraphProductForm}>Drink</p>
              <input
                {...register('typeProduct', { required: true })}
                id='drink'
                value='drink'
                name='typeProduct'
                type='radio'
              />
            </label>
            {errors.name && (
              <p className={styles.errorTextProductForm}>
                This Type is required
              </p>
            )}

            <button className={styles.buttonProductForm} type='submit'>
              Submit
            </button>
            <button
              className={styles.buttonProductForm}
              type='button'
              onClick={() => reset()}
            >
              Reset
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default CreateProductHookForm;
