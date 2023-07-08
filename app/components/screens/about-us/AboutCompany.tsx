import Image from 'next/image';
import { FC } from 'react';

import Socials from '@/components/socials/Socials';

import Layout from '@/layout/meta/Layout';
import Sidebar from '@/layout/sidebar/Sidebar';

import { textContentOnAboutPage } from '../../data/text-info/text-info.data';

import styles from './AboutUs.module.scss';

const AboutCompany: FC = () => {
  return (
    <>
      <Layout title='AboutCompany' description='About Company'>
        <div className={styles.containerWrapperAboutUs}>
          <Sidebar />

          <div className={styles.wrapperAboutUs}>
            <Image
              src={'/images/about-us/AboutUs.jpg'}
              alt={'Image Cafe'}
              width={900}
              height={200}
            />
            {textContentOnAboutPage.map(el => (
              <section key={el.title}>
                <h2 className={styles.titleAboutUs}>{el.title}</h2>
                <strong>
                  <em>{el.paragraph}</em>
                </strong>
              </section>
            ))}

            <Socials />

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
