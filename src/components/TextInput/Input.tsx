import { clsx } from 'clsx';
import {
  memo,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
type IInputProps = InputHTMLAttributes<HTMLInputElement>;
const TextInputInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputProps
> = ({ className, ...props }, ref) => {
  return (
    <input
      className={clsx(
        'outline-none flex flex-1 text-sm font-Roboto font-normal placeholder:text-gray-200 bg-transparent text-white',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
export const TextInputInput = memo(forwardRef(TextInputInputBase));
