import Image from 'next/image';
import { FC } from 'react';

import Layout from '@/layout/meta/Layout';
import Sidebar from '@/layout/sidebar/Sidebar';

const DesertPage: FC = () => {
  return (
    <>
      <Layout title='DesertkPage' description='Desert Page'>
        <div className='lg:flex lg:flex-row flex-col'>
          <Sidebar />
          <div className='place-content-center flex'>
            <Image
              src={'/images/card/food.jpg'}
              alt='Picture of the author'
              width={400}
              height={400}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DesertPage;
