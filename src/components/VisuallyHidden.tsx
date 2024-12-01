interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export default function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span>{children}</span>;
}
