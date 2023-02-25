import { FC, PropsWithChildren } from 'react';

const BurgerButton: FC<
  PropsWithChildren<{
    className?: string;
    setState: any;
    state: boolean;
  }>
> = ({ children, className, setState, state }) => {
  return (
    <>
      <button
        type='button'
        className={className}
        onClick={() => setState(!state)}
      >
        {children}
      </button>
    </>
  );
};

export default BurgerButton;
