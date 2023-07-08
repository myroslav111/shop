import { FC } from 'react';

import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

const SignInPage: FC = () => {
  return (
    <Layout title='Sing in' description='Sing in'>
      <Heading>Sign in</Heading>
    </Layout>
  );
};

export default SignInPage;
