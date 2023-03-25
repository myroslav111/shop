import { useRouter } from 'next/router';
import { FC } from 'react';
import { useEffect } from 'react';

import ErrorPage from '@/components/screens/error-page/ErrorPage';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <ErrorPage />
    </>
  );
};

export default Error;
