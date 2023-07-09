import { FC, useState } from 'react';

import AuthFormik from './component-formik/AuthFormik';

export interface IFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignInForm: FC = () => {
  const [data, setData] = useState<IFormValues>({
    email: '',
    password: '',
    confirmPassword: ''
    // name: '',
    // city: '',
    // phone: ''
  });
  console.log(data);

  const handleUserData = (newData: IFormValues): void => {
    setData(prev => ({ ...prev, ...newData }));
    const { email, password } = newData;
  };

  return (
    <div>
      <AuthFormik handleUserData={handleUserData} data={data} />
    </div>
  );
};

export default SignInForm;
