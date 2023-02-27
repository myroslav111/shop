import { FC } from 'react';

import { card } from '@/components/data/card.data';
import Card from '@/components/ui/card/Card';
import Heading from '@/components/ui/heading/Heading';

import Layout from '@/layout/meta/Layout';

const MenuPage: FC = () => {
  return (
    <Layout title='Menu' description='products'>
      <div className='flex'>
        <div className='hidden lg:w-1/3 lg:h-full lg:block bg-dark-green '>
          <h2 className='text-center text-4xl text-green'>MENU</h2>
        </div>
        <div className='mx-auto px-4'>
          <h1 className='text-2xl text-black font-bold mb-4'>Unser Angebot</h1>
          <p className='max-w-2xl text-darck-beige mb-10'>
            Essen und Trinken in reichhaltiger Auswahl: Das Starbucks Angebot an
            Getränken und Snacks Nur wenig ist für unsere Lebensqualität so
            wichtig wie Essen und Trinken. Und bei unserer Starbucks Auswahl
            kannst du dir sicher sein, dass alles, was du dir aussuchst, von
            bester Qualität ist. Gönne dir eine perfekte Tasse Kaffee und ein
            paar ausgesuchte, leckere Snacks - zu jedem Zeitpunkt.
          </p>
          <div className='mx-auto lg:grid lg:grid-cols-2 lg:gap-6 flex flex-col gap-4'>
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
