import { FC } from 'react';

import { card } from '@/components/data/card.data';
import Card from '@/components/ui/card/Card';

import Layout from '@/layout/meta/Layout';

const MenuPage: FC = () => {
  return (
    <Layout title='Menu' description='products'>
      <div className='flex'>
        <div className='hidden lg:w-1/3 lg:h-full lg:block'>dddd</div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-6 flex flex-col gap-4'>
          {card.map(cardItem => (
            <div className='place-content-center flex'>
              <Card
                img={cardItem.img}
                title={cardItem.title}
                description={cardItem.description}
                path={cardItem.path}
                fromPage={cardItem.fromPage}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// img: string;
// title: string;
// description: string;
// path: string;
// fromPage: string;
export default MenuPage;
