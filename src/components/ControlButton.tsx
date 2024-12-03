import { LucideProps } from 'lucide-react';
import React from 'react';

interface ControlButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

function ControlButton({ children, icon: Icon, ...rest }: ControlButtonProps) {
  return (
    <button
      {...rest}
      className={`flex items-center gap-1 bg-gray-200 text-gray-800 py-2 pl-2 pr-3 rounded-md border border-gray-300 hover:scale-105 transition-transform ${rest.className}`}
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
