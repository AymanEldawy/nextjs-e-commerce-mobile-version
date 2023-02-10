import React, { useContext, useState } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { FixedMenuBottom } from './../Menu/FixedMenuBottom';
import { MenuMobile } from './../Menu/MenuMobile';
import { MenuSidebar } from './../Menu/MenuSidebar';

export const Layout = ({
  children,
  hideBottomMenu,
  title,
  back,
  backSteps,
}) => {
  const { lang } = useContext(LanguageContext);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="mobile-container">
      <MenuMobile
        title={title}
        openMenu={() => setMenuOpened(true)}
        back={back}
        backSteps={backSteps}
      />
      <MenuSidebar
        closeMenu={() => setMenuOpened(false)}
        menuOpened={menuOpened}
      />
      <main>{children}</main>
      {hideBottomMenu ? null : <FixedMenuBottom />}
    </div>
  );
};
