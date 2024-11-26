import Image from 'next/image';
import React from 'react';
import parking from '@/public/parkovanie-1.jpg';
import Button from '@/ui/Button';

const MainSection = () => {
  return (
    <section className='flex flex-col items-center pb-5 pt-12 text-text_01 md:pb-11 md:pt-16'>
      <h1 className='mb-4 text-center text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl desktop:text-[42px]'>
        Помощник по парковке
      </h1>
      <p className='text-center text-sm sm:text-base md:text-2xl'>
        Простое бронирование парковочных мест у вашего офиса
      </p>
      <div className='my-9 sm:my-12'>
        <Button title='Перейти в личный кабинет' isSecondary={false} />
      </div>
      <Image
        src={parking}
        alt='parking'
        className='h-[300px] w-[800px] rounded-3xl object-cover object-center shadow-[0px_0px_10px_0px_var(--base-gray-01)] sm:h-[380px]'
      />
    </section>
  );
};

export default MainSection;
