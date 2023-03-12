import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './AwardsPage.module.scss';
import ErrorFormHook from './ErrorFormHook';
// import { awardsData } from './awards.data';
import { IAwards } from './awards.interface';

const AwardsPage: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<IAwards>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IAwards> = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className={styles.wrapperAwards}>
        {/* ! reupload from "awards.data" */}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formAwards}>
          {/* {awardsData.map(el => (
            <label key={el.name} className={styles.labelAwards}>
              <p className={styles.paragraphAwards}>{el.name}</p>
              <input
                className={styles.inputAwards}
                {...register('name', { required: true })}
                type={el.type}
                name={el.name}
                placeholder={el.placeholder}
                autoComplete={el.autoComplete}
                accept={el.accept}
              />

              {errors.name && (
                <p className={styles.paragraphAwards}>
                  This {el.name} is required
                </p>
              )}
            </label>
          ))} */}

          <label className={styles.labelAwards}>
            <p className={styles.paragraphAwards}>Name</p>

            <input
              className={styles.inputAwards}
              {...register('name', { required: true })}
              type='text'
              name='name'
              placeholder='Name'
              autoComplete='off'
            />
          </label>
          {errors.name && (
            <p className={styles.paragraphAwards}>This Name is required</p>
          )}

          <label className={styles.labelAwards}>
            <p className={styles.paragraphAwards}>Description</p>
            <textarea
              className={styles.descriptionAwards}
              placeholder='Write description ...'
              {...register('description', { required: true, maxLength: 200 })}
            ></textarea>
          </label>
          {errors.description && (
            <p className={styles.paragraphAwards}>
              This Description is required
            </p>
          )}

          <label className={styles.labelAwards}>
            <p className={styles.paragraphAwards}>Price</p>
            <input
              className={styles.inputAwards}
              {...register('price', { required: true })}
              type='number'
              name='price'
              placeholder='123'
              autoComplete='off'
            />
          </label>
          {errors.price && (
            <p className={styles.paragraphAwards}>This Price is required</p>
          )}

          <label className={styles.labelAwards}>
            <p className={styles.paragraphAwards}>File</p>

            <input
              className={styles.inputAwards}
              {...register('image', { required: true })}
              type='file'
              name='image'
              accept='.jpg'
            />
          </label>
          {errors.name && (
            <p className={styles.paragraphAwards}>This Image is required</p>
          )}

          <button className={styles.buttonAwards} type='submit'>
            Submit
          </button>
        </form>

        {/* <ErrorFormHook /> */}
      </div>
    </>
  );
};

export default AwardsPage;
