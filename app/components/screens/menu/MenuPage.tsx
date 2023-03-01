import { FC } from 'react';

import { card } from '@/components/data/card.data';
import { textInfoForMenu } from '@/components/data/text-info/text-info.data';
import Card from '@/components/ui/card/Card';

import Layout from '@/layout/meta/Layout';

import AccordionText from '../../ui/accordion/AccordionText';

const MenuPage: FC = () => {
  return (
    <Layout title='Menu' description='products'>
      <div className='flex'>
        <div className='hidden lg:w-1/3 lg:h-full lg:block bg-dark-green '>
          <h2 className='text-center text-4xl text-green'>MENU</h2>
        </div>
        <div className='mx-auto px-4'>
          <h1 className='text-2xl text-black font-bold mb-4'>Unser Angebot</h1>
          <AccordionText
            primary={textInfoForMenu.primary}
            secondary={textInfoForMenu.secondary}
            className={'max-w-2xl text-darck-beige'}
          />
          <div className='mx-auto lg:grid lg:grid-cols-2 lg:gap-6 flex flex-col gap-4 mt-10'>
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
      </div>
    </Layout>
  );
};

export default MenuPage;
