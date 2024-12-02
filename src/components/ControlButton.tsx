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
    <button {...rest} className='flex gap-2 bg-gray-200 py-2 px-3 rounded-md'>
      <Icon />
      {children}
    </button>
  );
}

export default ControlButton;
