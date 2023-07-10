import { FC } from 'react';

import LoginForm from '@/components/login-page-form/LoginForm';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

const LoginPage: FC = () => {
  return (
    <Layout title='LoginPage' description='LoginPage'>
      <Heading>Login</Heading>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
