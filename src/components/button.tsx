import { MouseEventHandler, ReactNode } from 'react';
import { clsx } from 'clsx';

export type ButtonProps = {
  children: ReactNode;
  variants?: 'main' | 'mainReverse';
  size?: 'small' | 'medium' | 'large' | 'regular';
  type?: 'submit' | 'button' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & React.ComponentProps<'button'>;

export const Button = ({ children, variants = 'main', size, onClick, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        ' border-sm hover:border-transparent m-auto  block rounded-lg border-black py-1 px-6',
        {
          'bg-dark-blue text-white  hover:bg-primary-blue hover:text-black': variants === 'main',

          'hover:border-transparent   hover:shadow-no-inset-box bg-primary-blue text-black  hover:bg-dark-blue hover:text-white ':
            variants === 'mainReverse',
          ' w-2/4 px-8 py-2 ': size === 'large',
          '  w-5/6 py-1.5 ': size === 'medium',
          ' px-1.5 py-0.5': size === 'small',
          '  w-1/4 py-1.5 ': size === 'regular',
        }
      )}
    >
      <span className="text-md font-light ">{children}</span>
    </button>
  );
};
