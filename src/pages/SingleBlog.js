import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import BlogDetail from '../components/singleblog/BlogDetail';

export default function SingleBlog() {
  const [blogLoading, setBlogLoading] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-start py-32 px-20">
      <div>
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
        {blogLoading && <p className="text-2xl text-[#4699C2] pt-4">Loading</p>}
      </div>

      <BlogDetail setBlogLoading={setBlogLoading} />
    </div>
  );
}
