import React from 'react';

import { useTranslation } from 'react-i18next';

export default function Story() {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col py-20 flex-nowrap justify-center align-center bg-white">
      <div className="">
        <h1 className="mt-8 text-5xl md:mt-2 mb-8 text-[#025594] font-bold">
          {t('OurStory')}
        </h1>
      </div>
      <div className="mx-16 md:mx-72  mb-16">
        <p className="text-lg ">
        {t('OurStoryText')}
        </p>
      </div>
    </div>
  );
}
