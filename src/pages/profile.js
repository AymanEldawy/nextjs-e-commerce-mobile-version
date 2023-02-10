import { fetchWord } from '@/lang/fetchWord';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

import { ChevronIcon } from '../Components/Icons/ChevronIcon';
import { LanguageContext } from './../context/LangContext';
import { Layout } from './../components/Layout/Layout';
import { EditProfileIcon } from './../components/Icons/EditProfileIcon';
import { FlagIcon } from './../components/Icons/FlagIcon';
import { NotificationIcon } from './../components/Icons/NotificationIcon';
import { VisaCardIcon } from './../components/Icons/VisaCardIcon';
import { LanguageIcon } from './../components/Icons/LanguageIcon';
import { PrivacyIcon } from './../components/Icons/PrivacyIcon';
import { LogoutIcon } from './../components/Icons/LogoutIcon';

const Profile = ({ closeMenu, menuOpened }) => {
  const user = null;
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
  const { lang, changeLang } = useContext(LanguageContext);
  const router = useRouter();
  console.log(router);
  const links = [
    {
      role: 'link',
      icon: <EditProfileIcon />,
      name: 'Edit Profile',
      path: '/edit-profile',
    },
    {
      role: 'link',
      icon: <FlagIcon />,
      name: 'My Addresses',
      path: '/addresses',
    },
    {
      role: 'link',
      icon: <NotificationIcon />,
      name: 'Notification',
      path: '/notification',
    },
    {
      role: 'link',
      icon: <VisaCardIcon />,
      name: 'My Cards',
      path: '/saved-cards',
    },
    {
      role: 'btn',
      icon: <LanguageIcon />,
      name: 'Languages',
    },
    {
      role: 'link',
      icon: <PrivacyIcon />,
      name: 'Terms&conditions',
      path: '/terms',
    },
    {
      role: 'btn',
      icon: <LogoutIcon />,
      name: 'Logout',
    },
  ];
  return (
    <Layout title="My account" full>
      <aside className={`flex flex-col bg-white h-screen`}>
        <div className="min-h-[170px] bg-primary flex items-end">
          <p className="text-white p-4 pb-6 text-lg text-center font-medium w-full">
            Sign in or Create an account
          </p>
        </div>
        <ul className="flex flex-col gap-4 px-4 mt-6 pb-24">
          {links?.map((link) => (
            <li
              key={link?.name}
              className="px-4 font-medium bg-[#F9F9F9] p-3 rounded-md"
            >
              {link?.role === 'link' ? (
                <Link href={link?.path} className="flex gap-3 items-center">
                  <span className="bg-primary p-2 rounded-md">
                    {link?.icon}
                  </span>
                  {link?.name}
                  <span className="rotate-180 scale-90 ml-auto rtl:mr-auto rtl:ml-0">
                    <ChevronIcon />
                  </span>
                </Link>
              ) : (
                <>
                  <></>
                  {link?.name === 'Languages' ? (
                    <>
                      <button
                        className="w-full flex gap-4 items-center"
                        onClick={() => setOpenLanguageMenu((prev) => !prev)}
                      >
                        <span className="bg-primary p-2 rounded-md">
                          {link?.icon}
                        </span>

                        {fetchWord('languages', lang)}
                        <span
                          className={`scale-75 rotate-180 mt-2 duration-200 transition-transform  ml-auto rtl:mr-auto rtl:ml-0
                   ${openLanguageMenu ? '!rotate-[270deg]' : ''}`}
                        >
                          <ChevronIcon />
                        </span>
                      </button>
                      <ul
                        className={`bg-gray-100 hidden overflow-hidden transition-all duration-300 border-t border-[#D6D6D6] ${
                          openLanguageMenu ? '!block' : ''
                        }`}
                      >
                        <li
                          className="p-2 px-4 cursor-pointer"
                          onClick={(e) => changeLang('ar')}
                        >
                          العربية
                        </li>
                        <div className="border border-gray-200" />
                        <li
                          className="p-2 px-4 cursor-pointer"
                          onClick={(e) => changeLang('en')}
                        >
                          English
                        </li>
                      </ul>
                    </>
                  ) : (
                    <button className=" w-full flex gap-4 items-center">
                      <span className="bg-primary p-2 rounded-md">
                        {link?.icon}
                      </span>{' '}
                      {link?.name}
                      <span className="rotate-180 scale-90 ml-auto rtl:mr-auto rtl:ml-0">
                        <ChevronIcon />
                      </span>
                    </button>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </Layout>
  );
};

export default Profile;
