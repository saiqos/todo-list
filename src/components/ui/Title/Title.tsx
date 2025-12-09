import type { TitleProps } from '@/types/types';

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={`mt-4 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}
    >
      {children}
    </h1>
  );
}
