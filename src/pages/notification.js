import React from 'react';
import { Layout } from './../components/Layout/Layout';
import { NotificationItem } from './../components/NotificationItem';

const Notification = () => {
  const notificationList = [
    'General notification',
    'App updates',
    'New posts near to you',
    'Offer requests',
    'Users accept',
  ];
  return (
    <Layout title="Notification setting" back hideBottomMenu>
      <div className="mt-12 flex flex-col gap-4">
        {notificationList?.map((item) => (
          <NotificationItem key={item} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Notification;
