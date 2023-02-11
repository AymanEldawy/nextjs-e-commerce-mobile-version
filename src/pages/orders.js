import React, { useState, useContext } from 'react';

import { OrdersEmpty } from './../components/Orders/OrdersEmpty';
import { OrderStatusBar } from './../components/Orders/OrderStatusBar';
import { TableOrderProducts } from './../components/Orders/TableOrderProducts';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';
import { Layout } from './../components/Layout/Layout';

const Orders = () => {
  const { lang } = useContext(LanguageContext);
  const [orders, setOrders] = useState();
  return (
    <Layout title={fetchWord("My Orders", lang)} back hideBottomMenu>
      {!orders ? (
        <div>
          <OrderStatusBar />
          <TableOrderProducts />
        </div>
      ) : (
        <OrdersEmpty />
      )}
    </Layout>
  );
};

export default Orders;
