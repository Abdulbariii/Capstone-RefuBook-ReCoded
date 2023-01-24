import React from 'react';

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Inspireimg from './Inspireimg';

export default function Inspire() {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center py-16">
      <div className="pb-10">
        <Inspireimg />
      </div>
      <div>
        <h1 className="text-[#026FC2] text-4xl pb-10 mx-10">
          {t('InspireTitle')}
        </h1>
      </div>
      <div className="mx-16 lg:mx-96 text-[#9DAFBD] mb-5">
        <p>
        {t('InspireText')}

        </p>
      </div>
      <div>
        <NavLink to="/signup">
          <button
            type="button"
            className="inline-block   px-7 py-1.5  bg-[#4699C2] text-white font-bold text-sm rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
          >
            {t('signup')}
          </button>
        </NavLink>
      </div>
    </div>
  );
}
