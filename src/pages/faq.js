import React, { useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { SearchIcon } from './../components/Icons/SearchIcon';
import { MessageIcon } from './../components/Icons/MessageIcon';
import { PaymentIcon } from './../components/Icons/PaymentIcon';
import { CancellationIcon } from './../components/Icons/CancellationIcon';
import { TrunkIcon } from './../components/Icons/TrunkIcon';
import { DollarIcon } from './../components/Icons/DollarIcon';
import { TagIcon } from './../components/Icons/TagIcon';
import { FAQCard } from './../components/FAQCard/FAQCard';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';

const FAQ = () => {
  const { lang } = useContext(LanguageContext);
  const faqs = [
    {
      icon: <MessageIcon color="var(--primary-color)" />,
      question: fetchWord('question_1', lang),
      answer: fetchWord('answer_1', lang),
    },
    {
      icon: <PaymentIcon width={20} color="var(--primary-color)" />,
      question: fetchWord('question_2', lang),
      answer: fetchWord('answer_2', lang),
    },
    {
      icon: <CancellationIcon />,
      question: fetchWord('question_3', lang),
      answer: fetchWord('answer_3', lang),
    },
    {
      icon: <TrunkIcon />,
      question: fetchWord('question_4', lang),
      answer: fetchWord('answer_4', lang),
    },
    {
      icon: <DollarIcon />,
      question: fetchWord('question_5', lang),
      answer: fetchWord('answer_5', lang),
    },
    {
      icon: <TagIcon />,
      question: fetchWord('question_6', lang),
      answer: fetchWord('answer_6', lang),
    },
  ];
  return (
    <Layout>
      <div className="pt-[1px] bg-bgprimary">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <span>FAQs</span>
            <h1 className="text-4xl text-primary mb-4">
              {fetchWord('ask_anything', lang)}
            </h1>
            <p className="text-secondary">{fetchWord('have_question', lang)}</p>
            <form className="flex gap-2 shadow rounded-md p-2 my-6 max-w-xs w-full bg-white">
              <button className="scale-75">
                <SearchIcon />
              </button>
              <input type="search" placeholder={fetchWord('search', lang)} />
            </form>
          </div>
        </div>
        <div className="bg-white py-6">
          <div className="container">
            <div className="grid grid-cols-3 gap-8 ">
              {faqs?.map((question) => (
                <FAQCard question={question} key={question?.question} />
              ))}
            </div>
            <div className="bg-bgprimary rounded-md max-h-56 flex justify-between items-center p-6 mt-8">
              <div className="flex flex-col ">
                <h3 className="text-tprimary text-sm mb-2 font-medium">
                  {fetchWord('still_have_question', lang)}
                </h3>
                <p className="text-xs text-tprimary">
                  {fetchWord('no_answer', lang)}
                </p>
              </div>
              <PrimaryButton
                text={fetchWord('get_in_touch', lang)}
                classes="w-36 text-sm py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default FAQ;
