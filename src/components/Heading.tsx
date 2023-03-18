import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode, FC } from 'react';
export interface HeadingProps {
  size: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}
export const Heading: FC<HeadingProps> = ({
  size,
  className,
  asChild,
  children,
}) => {
  const Comp = asChild ? Slot : 'h1';
  return (
    <Comp
      className={clsx(
        'font-Poppins font-semibold text-orange-300',
        {
          'text-2xl': size === 'lg',
          'text-xl': size === 'md',
          'text-lg': size === 'sm',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
};
