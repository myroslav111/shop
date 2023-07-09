import { FC, useState } from 'react';

import SignInForm from '@/components/sign-in-page-form/SignInForm';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

const SignInPage: FC = () => {
  return (
    <Layout title='Sing in' description='Sing in'>
      <Heading>Sign in</Heading>
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
