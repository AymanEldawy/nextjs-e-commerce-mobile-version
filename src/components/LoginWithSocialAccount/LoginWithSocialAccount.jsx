import React from 'react';
import { GoogleIcon } from './../Icons/GoogleIcon';
import { FacebookMobileIcon } from './../Icons/FacebookMobileIcon';
import { AppleMobileIcon } from './../Icons/AppleMobileIcon';
import { GoogleMobileIcon } from './../Icons/GoogleMobileIcon';

export const LoginWithSocialAccount = () => {
  return (
    <div className="flex gap-4 w-72 justify-around mx-auto">
      <button className="icon-shadow w-14 h-14 flex items-center justify-center rounded-md p-2">
        <FacebookMobileIcon />
      </button>
      <button className="icon-shadow w-14 h-14 flex items-center justify-center rounded-md p-2">
        <GoogleMobileIcon />
      </button>
      <button className="icon-shadow w-14 h-14 flex items-center justify-center rounded-md p-2">
        <AppleMobileIcon />
      </button>
    </div>
  );
};
