import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode, FC, ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
export const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={clsx(
        'outline-none py-3 px-6 rounded font-Poppins font-semibold bg-orange-900 text-lg text-amber-900 focus-within:ring-white focus-within:ring-2 ',
        className,
      )}
    >
      {children}
    </button>
  );
};
