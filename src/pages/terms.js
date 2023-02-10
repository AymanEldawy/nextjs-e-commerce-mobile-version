import React, { useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { SectionTitle } from './../components/Global/SectionTitle';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';

const Terms = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout title="Privacy policy" back>
      <div className="pt-[1px] bg-white mb-8 mt-12">
        <h2 className="text-primary font-medium text-xl mb-4">
          1. {fetchWord('Terms', lang)}
        </h2>
        <p className="px-4">{fetchWord('Terms_description', lang)}</p>
        <h2 className="text-primary font-medium text-xl mb-4 mt-6">
          2. {fetchWord('Use License', lang)}
        </h2>
        <p className="px-4">{fetchWord('Use_License_description', lang)} </p>
        <ul className="px-4">
          <li>{fetchWord('Use_License_list_1', lang)}</li>
          <li>{fetchWord('Use_License_list_2', lang)}</li>
          <li>{fetchWord('Use_License_list_3', lang)}</li>
          <li>{fetchWord('Use_License_list_4', lang)}</li>
        </ul>
        <p className="mt-8">
          <li>{fetchWord('Use_License_list_description', lang)}</li>
        </p>
      </div>
    </Layout>
  );
};

export default Terms;
