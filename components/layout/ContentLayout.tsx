import React from 'react';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full px-5 sm:px-8 md:px-10 lg:px-12 desktop:px-40'>
      <div className='m-auto h-full max-w-[340px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] desktop:max-w-[1240px]'>
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
