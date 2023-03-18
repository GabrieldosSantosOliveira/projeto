import { clsx } from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';
export type TextInputRootProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};
export const TextInputRoot: FC<TextInputRootProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'border-gray-500 w-full  border flex justify-between items-center rounded h-11 px-3 gap-1 focus-within:border-orange-900 focus-within:shadow-[0_0_0_2px_#FFDE88] text-white focus-within:text-orange-900',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
