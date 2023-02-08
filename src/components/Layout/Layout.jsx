import React, { useContext, useState } from 'react';

import { Footer } from './../Footer/Footer';
import { Menu } from './../Menu/Menu';
import { LanguageContext } from './../../context/LangContext';
import { MenuMobile } from './../Menu/MenuMobile';
import { MenuSidebar } from './../Menu/MenuSidebar';

export const Layout = ({ children }) => {
  const { lang } = useContext(LanguageContext);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="mobile-container">
      {/* <Menu /> */}
      <MenuMobile openMenu={() => setMenuOpened(true)} />
      <MenuSidebar
        closeMenu={() => setMenuOpened(false)}
        menuOpened={menuOpened}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
