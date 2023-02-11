import React, { useContext, useState } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { FixedMenuBottom } from './../Menu/FixedMenuBottom';
import { MenuMobile } from './../Menu/MenuMobile';
import { MenuSidebar } from './../Menu/MenuSidebar';
import SearchBar from './../SearchBar/SearchBar';

export const Layout = ({
  children,
  hideBottomMenu,
  title,
  back,
  backSteps,
  full,
}) => {
  const { lang } = useContext(LanguageContext);
  const [openedSearch, setOpenedSearch] = useState(false);
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
        setOpenedSearch={setOpenedSearch}
      />
      <MenuSidebar
        closeMenu={() => setMenuOpened(false)}
        menuOpened={menuOpened}
      />
      <SearchBar
        setOpenedSearch={setOpenedSearch}
        openedSearch={openedSearch}
      />
      <main>{children}</main>
      {hideBottomMenu ? null : <FixedMenuBottom />}
    </div>
  );
};
