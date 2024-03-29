import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { FC, useState } from 'react';

import ButtonForm from '@/components/button-form/ButtonForm';

import styles from './LoginFormik.module.scss';
import {
  emailValidationSchema,
  loginValidationSchema,
  passwordValidationSchema,
  stepOneValidationSchema,
  stepTwoValidationSchema
} from '@/services/userValidation';

interface IInitialValues {
  email: string;
  password: string;
}

const initialValues: IInitialValues = {
  email: '',
  password: ''
};

const LoginFormik: FC = () => {
  const [isError, setIsError] = useState(null);
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePassword = () => setPasswordShow(prevState => !prevState);

  const handleSubmit = (formData: IInitialValues, { resetForm }: any) => {
    console.log(formData);
    // const { error } = await login(formData);
    // if (error) {
    //   setIsError({
    //     message: error.data.message,
    //     additionalInfo: error.data.additionalInfo
    //   });
    //   resetForm();
    // } else {
    //   navigate('/user');
    // }
  };

  return (
    <div>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field
                className={styles.inputEmail}
                autoFocus='autofocus'
                name='email'
                type='email'
                placeholder='Email'
                autoComplete='off'
              />
              <ErrorMessage
                name='email'
                component='p'
                className={styles.errorMessage}
              />
            </div>
            <div>
              <Field
                className={styles.inputEmail}
                name='password'
                type={passwordShow ? 'text' : 'password'}
                placeholder='Password'
                autoComplete='off'
              />
              <span id='visibilityBtn' onClick={togglePassword}>
                {passwordShow ? (
                  <ViewIcon cursor={'pointer'} color={'#6c946b'} />
                ) : (
                  <ViewOffIcon cursor={'pointer'} color={'#6c946b'} />
                )}
              </span>
              <ErrorMessage
                name='password'
                component='p'
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.buttonFormContainer}>
              <ButtonForm />
            </div>
            <Link href='/sign-in/SignIn'>
              <p className={styles.textLink}>No accaunt? Register</p>
            </Link>
            {/* <p className={scss.redirect__auth}>
              <Link to='/forgot-password' className={scss.redirect_link__auth}>
                {t('Forgot password?')}
              </Link>
            </p> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
