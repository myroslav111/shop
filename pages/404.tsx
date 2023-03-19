import { useRouter } from 'next/router';
import { FC } from 'react';
import { useEffect } from 'react';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <div className='min-h-screen flex justify-center items-center'>
        <h1 className=''>404: after 3 sec beck to home</h1>
      </div>
    </>
  );
};

export default Error;
