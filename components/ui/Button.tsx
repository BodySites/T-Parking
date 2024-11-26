import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { SyntheticEvent } from 'react';

interface ButtonProps {
  isSecondary: boolean;
  title: string;
  href?: Url;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({
  isSecondary,
  title,
  href = '',
  onClick,
  disabled,
}: ButtonProps) => {
  const styles: string = isSecondary
    ? 'border-[1px] border-base_gray_01 bg-transparent hover:border-base_01'
    : 'bg-base_primary hover:bg-base_primary_hover disabled:bg-base_gray_01';

  return (
    <Link href={href}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`flex w-full items-center justify-center rounded-lg px-6 py-4 text-[15px] text-text_01 hover:text-text_black disabled:text-base_gray_01 sm:px-10 ${styles}`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
