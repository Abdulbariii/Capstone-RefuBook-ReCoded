import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TailSpin } from 'react-loader-spinner';
import BlogDetail from '../components/singleblog/BlogDetail';

export default function SingleBlog() {
  const { t } = useTranslation('common');
  const [blogLoading, setBlogLoading] = useState(false);

  return (
    <div className="min-h-screen  flex justify-center items-start py-32 px-2 lg:px-20">
      <div className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] ">
        <TailSpin
          height="120"
          width="120"
          color="#4699C2"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={blogLoading ? true : null}
        />
        {blogLoading && <p className="text-2xl text-[#4699C2] pt-4">{t('Loading')}</p>}
      </div>

      <BlogDetail blogLoading={blogLoading} setBlogLoading={setBlogLoading} />
    </div>
  );
}
