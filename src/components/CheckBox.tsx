import { clsx } from 'clsx';
import {
  HTMLAttributes,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  memo,
  forwardRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { BsCheck } from 'react-icons/bs';
type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconBaseProps;
  container?: HTMLAttributes<HTMLDivElement>;
};
export const CheckBoxBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { container, icon, ...props },
  ref,
) => {
  return (
    <div
      {...container}
      className={clsx('relative h-5 w-5', container?.className)}
    >
      <input
        type="checkbox"
        ref={ref}
        {...props}
        className={clsx(
          'absolute appearance-none w-full h-full  checked:border-none border transition border-gray-200 rounded checked:bg-orange-900 peer',
          props?.className,
        )}
      />
      <BsCheck
        size={24}
        {...icon}
        className={clsx(
          'opacity-0 peer-checked:opacity-100 transition absolute text-[#473404]  h-full w-full m-0',
          icon?.className,
        )}
      />
    </div>
  );
};
export const CheckBox = memo(forwardRef(CheckBoxBase));
