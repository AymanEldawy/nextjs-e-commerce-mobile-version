import React, { useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { NotificationItem } from './../components/NotificationItem';
import { LanguageContext } from './../context/LangContext';
import { fetchWord } from './../lang/fetchWord';

const Notification = () => {
  const { lang } = useContext(LanguageContext);
  const notificationList = [
    fetchWord('General notification', lang),
    fetchWord('App updates', lang),
    fetchWord('New posts near to you', lang),
    fetchWord('Offer requests', lang),
    fetchWord('Users accept', lang),
  ];
  return (
    <Layout title={fetchWord('Notification setting', lang)} back hideBottomMenu>
      <div className="mt-12 flex flex-col gap-4">
        {notificationList?.map((item) => (
          <NotificationItem key={item} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Notification;
