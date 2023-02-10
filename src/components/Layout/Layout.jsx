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
  full
}) => {
  const { lang } = useContext(LanguageContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const classes = full ? 'mobile-container-full' : 'mobile-container';
  return (
    <div className={classes}>
      <MenuMobile
        title={title}
        openMenu={() => setMenuOpened(true)}
        back={back}
        backSteps={backSteps}
        full={full}
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
