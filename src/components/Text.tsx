import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode, FC } from 'react';
export interface TextProps {
  size: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}
export const Text: FC<TextProps> = ({ size, className, asChild, children }) => {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp
      className={clsx(
        'font-Roboto font-medium text-gray-300',
        {
          'text-base': size === 'lg',
          'text-sm': size === 'md',
          'text-xs': size === 'sm',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
};
