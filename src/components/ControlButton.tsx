import { LucideProps } from 'lucide-react';
import React from 'react';

interface ControlButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

function ControlButton({ children, icon: Icon, ...rest }: ControlButtonProps) {
  const classes = `flex items-center gap-1 bg-gray-200 py-2 pl-2 pr-3 rounded-md ${rest.className}`;
  return (
    <button
      {...rest}
      className={`${classes}`}
      onKeyDown={(event) => {
        event.stopPropagation();
      }}
    >
      <Icon size={20} />
      {children}
    </button>
  );
}

export default ControlButton;
