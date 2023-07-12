import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { FC, useState } from 'react';

import ButtonForm from '@/components/button-form/ButtonForm';

import styles from '../../login-page-form/component-formik-login/LoginFormik.module.scss';
import { IFormValues } from '../SignInForm';

import { stepOneValidationSchema } from '@/services/userValidation';

interface IProps {
  handleUserData: Function;
  data: IFormValues;
}

const AuthFormik: FC<IProps> = props => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [passwordConfirm, setPasswordConfirm] = useState<boolean>(false);

  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const togglePasswordConfirm = () =>
    setPasswordConfirm(prevState => !prevState);

  const handleSubmit = (values: IFormValues, { resetForm }: any) => {
    props.handleUserData(values);
    resetForm({ values: '' });
  };

  return (
    <div>
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* <h2>title</h2> */}
            <div>
              <Field
                className={styles.inputEmail}
                name='email'
                type='email'
                placeholder='Email'
                autoFocus='autofocus'
                autoComplete='autoComplete'
                // as='select'
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
            <div>
              <Field
                className={styles.inputEmail}
                name='confirmPassword'
                type={passwordConfirm ? 'text' : 'password'}
                placeholder='Confirm Password'
              />
              <span id='visibilityBtn' onClick={togglePasswordConfirm}>
                {passwordConfirm ? (
                  <ViewIcon cursor={'pointer'} color={'#6c946b'} />
                ) : (
                  <ViewOffIcon cursor={'pointer'} color={'#6c946b'} />
                )}
              </span>
              <ErrorMessage
                name='confirmPassword'
                component='p'
                className={styles.errorMessage}
              />
            </div>
            <div className={styles.buttonFormContainer}>
              <ButtonForm />
            </div>
            <Link href='/login/Login'>
              <p className={styles.textLink}>{'Already have an account?'}</p>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthFormik;
