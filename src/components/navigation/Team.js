/* eslint-disable no-unused-vars */
import React from 'react';

import { useTranslation } from 'react-i18next';
import ShowAllButton from './ShowAllButton';
import CountryButton from './CountryButton';
import Members from './Members';

const Team = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="flex flex-col flex-nowrap bg-[#EAFBFF]">
      <div className="flex flex-col flex-nowrap justify-around">
        <div>
          <h1 className="text-[#025594] text-5xl font-bold mt-10 my-3">
            {t('OurTeam')}
          </h1>
        </div>
      </div>
      <div>
        <Members />
      </div>
    </div>
  );
};

export default Team;
