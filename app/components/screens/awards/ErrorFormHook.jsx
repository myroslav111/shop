import React from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

const ErrorFormHook = () => {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  function NestedInput() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <input {...register('test')} />;
  }

  return (
    <FormProvider {...methods}>
      {' '}
      // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type='submit' />
      </form>
    </FormProvider>
  );
};

export default ErrorFormHook;
