import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';
import user from '@/public/circle-user.svg';
import ContentLayout from '@/layout/ContentLayout';

const Header = () => {
  return (
    <header className='z-10 h-20 bg-base_primary shadow-[0px_0px_10px_0px_var(--base-gray-01)] sm:h-24'>
      <ContentLayout>
        <div className={`flex h-full items-center justify-between gap-5`}>
          <Link href='/'>
            <Image
              src={logo}
              alt='LogoImage'
              className='h-[60px] w-[130px] sm:h-[65px] sm:w-[150px]'
            />
          </Link>
          <Link className='flex items-center gap-3 md:gap-4' href=''>
            <span className='text-base text-text_01 md:text-lg md:font-semibold lg:text-xl'>
              Войти
            </span>
            <Image
              src={user as string}
              alt='userImage'
              width={32}
              height={32}
            />
          </Link>
        </div>
      </ContentLayout>
    </header>
  );
};

export default Header;
