import Image from 'next/image';
import { FC } from 'react';

import Layout from '@/layout/meta/Layout';

import { textContentOnAboutPage } from '../../data/text-info/text-info.data';

import styles from './AboutUs.module.scss';

const AboutCompany: FC = () => {
  return (
    <>
      <Layout title='AboutCompany' description='About Company'>
        <div className='flex'>
          <div className='mr-2 w-1/3 bg-dark-green text-center'>
            I am sidebar
          </div>

          <div className={styles.wrapperAboutUs}>
            <Image
              src={'/images/about-us/AboutUs.jpg'}
              alt={'Image Cafe'}
              width={500}
              height={200}
            />
            {textContentOnAboutPage.map(el => (
              <section>
                <h2 className={styles.titleAboutUs}>{el.title}</h2>
                <strong>
                  <em>{el.paragraph}</em>
                </strong>
              </section>
            ))}

            {/* //! Native HTML */}
            {/* //! <details>
            <summary style={{ cursor: 'pointer', width: '100%' }}>
              To watch me
            </summary>
            <p>Hello World</p>
          </details> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutCompany;
